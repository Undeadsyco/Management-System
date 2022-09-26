import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

import { EmployeeController } from '../../../utils/server/controllers';

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      CredentialProvider({
        id: 'bms',
        name: 'bms',
        type: 'credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async ({ username, password }, res) => {
          const employee = await EmployeeController.findEmployeeBmsAccount({ username, password });
          if (!employee || !res.ok) return null;
          
          return employee;
        }
      }),
    ],
    session: {
      strategy: 'jwt'
    },
    jwt: {
      encode: async (payload, secret) => {
        return jwt.sign(payload, secret);
      },
      decode: async (token, secret) => {
        return jwt.verify(token, secret);
      }
    },
    secret: 'my secret secret key',
    pages: {
      signIn: '/bms_system/login',
    },
    callbacks: {
      signIn: async ({ accessToken, user, account }) => {
        if (user) return { ...accessToken, user,  };

        return { ...accessToken }
      },
      session: async ({ token, session }) => {
        session.user = token.user;
        session.user.accessToken = token.accessToken;
      }
    }
  });
}