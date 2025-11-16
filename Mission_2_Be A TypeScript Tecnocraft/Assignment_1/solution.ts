const formatValue = <T>(value: T): T | null => {

  if (value === null || value === undefined) return null;
  if (typeof value === "string") {
    if (value.trim() === "") return null;
    return value.toUpperCase() as T;
  }
  if (typeof value === "number") {
    if (isNaN(value)) return null;
    return (value * 10) as T;
  }
  if (typeof value === "boolean") return (!value) as T;

  return null;
};

