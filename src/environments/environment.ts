// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  origin: 'http://localhost:4200/',
  baseUrl: 'http://localhost:8000/', //    http://194.181.46.30/mongo/
  bokunUrl: 'https://bokun.github.io/', // todo: set proper url
  mailChimpUrl: 'https://us6.api.mailchimp.com/3.0/' // todo: set proper url
};
