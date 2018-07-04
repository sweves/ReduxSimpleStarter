export function selectBook(book) {
  // selectBook is an action creater
  // it needs to return an action
  // aka an object with a type property
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
