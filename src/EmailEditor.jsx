import { useEffect, useRef } from "react";
import EmailEditor from "react-email-editor";
// import EmailEditor from './script';
import sample from "./sample.json";

const Editor = () => {
  // const status = useScript(
  //   window.location.protocol + "//" + window.location.host + "/productExample.js"
  // );
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log("saveDesign", design);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = () => {
    console.log("onLoad");

    emailEditorRef.current.editor.addEventListener(
      "design:loaded",
      onDesignLoad
    );

    emailEditorRef.current.editor.loadDesign(sample);
  };

  const onReady = () => {
    console.log("onReady");
  };
  const exampleProducts = [
    {
      id: "1d1d1d1",
      name: "ECHO BEACH ARCH 18",
      number: "123ae311",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04515_gry0.primary.png",
      sku: "4764",
    },
    {
      id: "2d1d2d2d2",
      name: "HIGHLINE PRO ARCH 19",
      number: "1d1d12dad",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04594_kvj0.primary.png",
      sku: "1291",
    },
    {
      id: "3dd3da3d",
      name: "HIGHLITE ARCH 19",
      number: "f1f2f1f2",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04566_kta6.primary.png",
      sku: "9242",
    },
    {
      id: "4s4a4a4",
      name: "SURFSILK TIJUANA 18",
      number: "g2g2g2g2",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04530_kta6.primary.png",
      sku: "9234",
    },
    {
      id: "55a5a5a5",
      name: "SURFSILK MYSTIC SESSIONS 18",
      number: "hh4h4h4h",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04523_wbb6.primary.png",
      sku: "1204",
    },
    {
      id: "6h6h6hhh6",
      name: "SURFSILK PARADISE EXPRESS 19",
      number: "k6k6k6k",
      image:
        "https://images.boardriders.com/elasticSuite/quiksilver/detail/eqybs04539_wbb6.primary.png",
      sku: "0402",
    },
  ];
  return (
    <>
      <h1>React Email Editor (Demo)</h1>
      <button onClick={saveDesign}>Save Design</button>
      <button onClick={exportHtml}>Export HTML</button>
      <EmailEditor
        minHeight={1000}
        options={{
          customCSS: ['https://examples.unlayer.com/examples/custom-css/custom.css', 'https://examples.unlayer.com/examples/product-library-tool/productTool.css'],
          customJS: [
            // 'https://examples.unlayer.com/examples/custom-js/custom.js',
            'https://examples.unlayer.com/examples/simple-custom-tool/custom.js',
            'https://examples.unlayer.com/examples/product-library-tool/productTool.js',
            // window.location.protocol + "//" + window.location.host + "/productExample.js"
          ],
          features: {
            textEditor: {
              emojis: false, // 表情编辑
              // tables: true, // 文本编辑表格功能呢
              spellChecker: true, // 文字拼写检查
            },
            preview: false, // 预览
            pageAnchors: true, // 开启页面跳转
            imageEditor: true, // 图片编辑功能
            stockImages: {
              enabled: true,
              safeSearch: true,
              defaultSearchTerm: "people",
            },
            audit: true,
          },
          tabs: {
            content: {
              active: true, // 默认点击
              enabled: true,
              icon: "https://my.cdn.com/blocks_icon.png",
            },
            blocks: {
              enabled: true,
              icon: "fa-regular fa-alicorn", // https://fontawesome.com/icons?d=gallery 类名
            },
            "custom#product_tool": {
              enabled: true,
            },
          },
        }}
        // projectId={88604}
        projectId={1}
        appearance={{
          theme: "dark",

          loader: {
            // url: 'IMAGE URL FOR LOADER'
            html: '<div class="custom-spinner"></div>',
            css: ".custom-spinner { color: red; }",
          },
          panels: {
            tools: {
              dock: "left", // 左侧展示
              collapsible: false, // 折叠工具箱
            },
          },
        }}
        tools={{
          "custom#product_tool": {
            data: {
              products: exampleProducts || [],
            },
            properties: {
              productLibrary: {
                editor: {
                  data: {
                    products: exampleProducts || [],
                  },
                },
              },
            },
          },
        }}
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
      />
    </>
  );
};

export default Editor;
