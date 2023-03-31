const diffDate = (startDate: string | null, endDate: string | null): number => {
  return startDate && endDate
    ? Math.round(
        Math.abs(
          (new Date(endDate).getTime() - new Date(startDate).getTime()) /
            (24 * 60 * 60 * 1000),
        ),
      )
    : 0;
};

export default diffDate;
