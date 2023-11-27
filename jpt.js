const loadScript = (src, async = true, type = "text/javascript") => {
    return new Promise((resolve, reject) => {
      try {
        const tag = document.createElement("script");
        const container = document.head || document.body;
  
        tag.type = type;
        tag.async = async;
        tag.src = src;
  
        tag.addEventListener("load", () => {
          resolve({ loaded: true, error: false });
        });
  
        tag.addEventListener("error", () => {
          reject({
            loaded: false,
            error: true,
            message: `Failed to load script with src ${src}`,
          });
        });
  
        container.appendChild(tag);
      } catch (error) {
        reject(error);
      }
    });
  };


  loadScript("https://www.youtube.com/iframe_api")
  .then((data) => {
    console.log("YouTube script successfully loaded", data);
  })
  .catch((error) => {
    console.error(error);
  });