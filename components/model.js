import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  console.log("aaa");
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    console.log(loader);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "milkyway";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log("error:", error);
        reject(error);
      }
    );
  });
}
