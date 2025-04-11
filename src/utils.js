export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export function emptyRows(page, rowsPerPage, arrayLength) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator(a, b, orderBy) {
  if (a[orderBy] === null) {
    return 1;
  }
  if (b[orderBy] === null) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function applyFilter({ inputData, comparator, filterName, command }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  // Filter by filterName
  if (filterName) {
    const lowerCaseSearchTerm = filterName.toLowerCase();
    inputData = inputData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  }

  // Filter by command (e.g., exact match on a certain field)
  if (command) {
    inputData = inputData.filter((item) => {
      const values = Object.values(item).map((v) => String(v).toLowerCase());
  
      if (command === "V") {
        return values.some((v) => v.includes("v") || v.includes("t-ok"));
      }
  
      return values.some((v) => v.includes(command.toLowerCase()));
    });
  }
  

  return inputData;
}

