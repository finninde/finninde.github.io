import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";
Refractor.registerLanguage(ts);

const Code = (props: any) => {
  return <Refractor language="ts" value={props.code} />;
};

export default Code;
