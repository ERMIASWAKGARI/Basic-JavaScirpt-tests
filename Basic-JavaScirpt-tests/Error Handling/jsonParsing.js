const jsonString = "{'name': 'John', 'age': 30}";

try {
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed object:", parsedObject);
} catch (error) {
  console.log("Error: Invalid JSON string!");
}
