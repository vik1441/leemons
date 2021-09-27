module.exports = [
  {
      method: "GET",
      path: "/settings",
      handler: "Upload.getSettings",
      config: {}
    },
    {
      method: "PUT",
      path: "/settings",
      handler: "Upload.updateSettings",
      config: {}
    },
    {
      method: "POST",
      path: "/",
      handler: "Upload.upload",
      config: {
        description: "Upload a file",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    },
    {
      method: "GET",
      path: "/files/count",
      handler: "Upload.count",
      config: {
        description: "Retrieve the total number of uploaded files",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    },
    {
      method: "GET",
      path: "/files",
      handler: "Upload.find",
      config: {
        description: "Retrieve all file documents",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    },
    {
      method: "GET",
      path: "/files/:id",
      handler: "Upload.findOne",
      config: {
        description: "Retrieve a single file depending on its id",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    },
    {
      method: "GET",
      path: "/search/:id",
      handler: "Upload.search",
      config: {
        description: "Search for an uploaded file",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    },
    {
      method: "DELETE",
      path: "/files/:id",
      handler: "Upload.destroy",
      config: {
        description: "Delete an uploaded file",
        tag: {
          plugin: "upload",
          name: "File"
        }
      }
    }
];
