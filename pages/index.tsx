import { Box } from "@chakra-ui/react";
import MobileDetect from "mobile-detect";
import type { NextPage } from "next";
import { Login } from "../components/Login";

const index: NextPage = () => {
  return <Login />;
};

export const getServerSideProps = ({ res, req }: { res: any; req: any }) => {
  const md = new MobileDetect(req?.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.end(`Fuck off`);
    return {};
  }

  return {
    props: {},
    // redirect: {
    //   destination: "/log-in",
    //   permanent: false,
    // },
  };
};

// index.getInitialProps = ({ res, req, ...props }) => {
//   const md = new MobileDetect(req?.headers[`user-agent`] as string);
//   const isBot = md.is(`Bot`);
//   if (isBot) {
//     res?.end(`Fuck off`);
//     return {};
//   }

//   return {
//     ...props,
//   };
// };

export default index;
