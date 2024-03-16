export function rename(arr: { [x: string]: any }[]) {
  arr = arr.map(function (obj: { [x: string]: any }) {
    // Assign new key
    obj["id"] = obj["productSlug"];

    // Delete old key
    delete obj["Burma"];

    return obj;
  });
}
