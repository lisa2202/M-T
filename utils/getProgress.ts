export const getProgress = () => {
  return [
    `Billing`,
    `Email`,
    `Card`,
    ...(process.env.NEXT_PUBLIC_DOCS_PAGE === `ON`
      ? [`Document`]
      : []),
    `Confirmation`, // don't move this, Confirmation needs to come last
  ];
};
