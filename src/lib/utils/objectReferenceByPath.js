// Converts 'a.b.c' on object to object[a][b][c]
// Credits: https://stackoverflow.com/questions/6393943/convert-a-javascript-string-in-dot-notation-into-an-object-reference
export default function objectReferenceByPath(path, object) {
    return path.split('.').reduce((o,i)=> o[i], object)
}