
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Commenter",
        "possibleTypes": [
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ContentNode",
        "possibleTypes": [
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ContentTemplate",
        "possibleTypes": [
          {
            "name": "CoverTemplateTemplate"
          },
          {
            "name": "DefaultTemplate"
          },
          {
            "name": "FullWidthTemplateTemplate"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "DatabaseIdentifier",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "Comment"
          },
          {
            "name": "MediaItem"
          },
          {
            "name": "Menu"
          },
          {
            "name": "MenuItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          },
          {
            "name": "PostFormat"
          },
          {
            "name": "Tag"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "EnqueuedAsset",
        "possibleTypes": [
          {
            "name": "EnqueuedScript"
          },
          {
            "name": "EnqueuedStylesheet"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "HierarchicalContentNode",
        "possibleTypes": [
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "HierarchicalTermNode",
        "possibleTypes": [
          {
            "name": "Category"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MenuItemLinkable",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          },
          {
            "name": "Tag"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "Comment"
          },
          {
            "name": "ContentType"
          },
          {
            "name": "EnqueuedScript"
          },
          {
            "name": "EnqueuedStylesheet"
          },
          {
            "name": "MediaItem"
          },
          {
            "name": "Menu"
          },
          {
            "name": "MenuItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Plugin"
          },
          {
            "name": "Post"
          },
          {
            "name": "PostFormat"
          },
          {
            "name": "Tag"
          },
          {
            "name": "Taxonomy"
          },
          {
            "name": "Theme"
          },
          {
            "name": "User"
          },
          {
            "name": "UserRole"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithAuthor",
        "possibleTypes": [
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithComments",
        "possibleTypes": [
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithContentEditor",
        "possibleTypes": [
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithExcerpt",
        "possibleTypes": [
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithFeaturedImage",
        "possibleTypes": [
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithPageAttributes",
        "possibleTypes": [
          {
            "name": "Page"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithRevisions",
        "possibleTypes": [
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithTitle",
        "possibleTypes": [
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeWithTrackbacks",
        "possibleTypes": [
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "TermNode",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "PostFormat"
          },
          {
            "name": "Tag"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "UniformResourceIdentifiable",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "ContentType"
          },
          {
            "name": "MediaItem"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          },
          {
            "name": "PostFormat"
          },
          {
            "name": "Tag"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ContentRevisionUnion",
        "possibleTypes": [
          {
            "name": "Page"
          },
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ContentTemplateUnion",
        "possibleTypes": [
          {
            "name": "CoverTemplateTemplate"
          },
          {
            "name": "DefaultTemplate"
          },
          {
            "name": "FullWidthTemplateTemplate"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MenuItemObjectUnion",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "Page"
          },
          {
            "name": "Post"
          },
          {
            "name": "Tag"
          }
        ]
      }
    ]
  }
};
      export default result;
    