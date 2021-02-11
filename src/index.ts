// Filtered algo search...
interface Filter {
  data: any[];
  filter: string;
  query: string;
}

const filtered = ({ data, filter, query }: Filter) => {
  if (data.length > 0) {
    const found = data.filter((item: any) => {
      let isFound = false;
      const filter_value = item[`${filter}`];
      if (filter_value) {
        if (filter_value.toLowerCase().indexOf(query) !== -1) {
          isFound = true;
        }
        if (filter_value.indexOf(query) !== -1) {
          isFound = true;
        }
      }
      return isFound;
    });
    return found;
  }
};

export { filtered };
