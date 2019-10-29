export const formatDate = date =>
  new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
