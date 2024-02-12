export const getExcludedDates = (dateRanges) => {
  const excludedDates = [];
  const today = new Date();

  dateRanges.forEach((range) => {
    let currentDate =
      new Date(range.dateFrom) < today
        ? new Date(today)
        : new Date(range.dateFrom);
    const endDate = new Date(range.dateTo);

    while (currentDate <= endDate && currentDate >= today) {
      excludedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return excludedDates;
};
