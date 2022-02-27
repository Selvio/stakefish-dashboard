const apiFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch {
    throw new Error("An error has occurred");
  }
};

export default apiFetch;
