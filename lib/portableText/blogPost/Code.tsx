import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";
Refractor.registerLanguage(ts);
import tsx from "refractor/lang/tsx";
Refractor.registerLanguage(tsx);

const Code = (props: { code: string; language: string }) => {
  const { code, language } = props;
  return <Refractor language={language} value={code} />;
};

export default Code;
