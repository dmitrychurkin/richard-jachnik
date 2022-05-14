import NextHead from 'next/head';

const Head = ({ children }) => (
    <NextHead>
        <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Richard Jachnik personal website" />
        <meta name="keywords" content="Richard Jachnik" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans:400,500,700|Google+Sans+Text:400&lang=ru&display=optional' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Google+Sans+Text:400&text=%E2%86%90%E2%86%92%E2%86%91%E2%86%93&lang=ru&display=optional' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.min.css" />
        <title>{children}</title>
    </NextHead>
);

export default Head;
