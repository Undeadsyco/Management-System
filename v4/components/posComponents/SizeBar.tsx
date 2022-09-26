import { useRecoilState, useRecoilValue } from "recoil";
import { menuState, sectionState } from "../../utils/atoms";

import Button from "../Button";

export default function SizeBar() {
  const { sections } = useRecoilValue(menuState);
  const [section, setSection] = useRecoilState(sectionState)

  return (
    <div className="row-start-1 row-span-1 col-start-4 col-span-9 flex gap-1">
      {sections.map((section) => (
        <Button key={section['_id']} btnText={section.name} btnAction={() => setSection(section.name)} />
      ))}
      <Button btnText="AOS/Other" />
    </div>
  );
}
