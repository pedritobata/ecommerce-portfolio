export const addParamsToUrl = (
  url: URL,
  params: { [param: string]: any }
): URL => {
  Object.entries(params).forEach(([param, value]) => {
    url.searchParams.set(param, value);
  });

  return url;
};
