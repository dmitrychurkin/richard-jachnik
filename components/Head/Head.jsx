import NextHead from 'next/head';

const Head = ({ children }) => (
    <NextHead>
        <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Richard Jachnik personal website" />
        <meta name="keywords" content="Richard Jachnik" />
        <title>{children}</title>
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <link href="/theme.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUma4oJ7_6VbfGNdUYdv6VQ0Ph07Fz0k8" />
    </NextHead>
);

export default Head;
