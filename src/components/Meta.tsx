import Head from "next/head";

interface IMeta {
  keywords: string;
  description: string;
  title: string;
}

const Meta = ({ keywords, description, title }: IMeta) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "avilldaniel daniel villegas personal project portfolio",
  description: "avilldaniel's portofolio",
  title: "avilldaniel",
};

export default Meta;
