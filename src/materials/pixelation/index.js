import { ShaderMaterial, Uniform, Vector2 } from "three";

import fragment from "./glsl/shader.frag";
import vertex from "./glsl/shader.vert";

/**
 * A pixelation shader material.
 *
 * Original shader code by Robert Casanova:
 *  https://github.com/robertcasanova/pixelate-shader
 *
 * @class PixelationMaterial
 * @submodule materials
 * @extends ShaderMaterial
 * @constructor
 */

export class PixelationMaterial extends ShaderMaterial {

	constructor() {

		super({

			type: "PixelationMaterial",

			uniforms: {

				tDiffuse: new Uniform(null),
				granularity: new Uniform(1.0),
				resolution: new Uniform(new Vector2(1.0, 1.0))

			},

			fragmentShader: fragment,
			vertexShader: vertex,

			depthWrite: false,
			depthTest: false

		});

	}

}
