import {
	BufferGeometry,
	BufferAttribute,
} from 'three';
import MeshBVH from '../src/MeshBVH.js';

global.onmessage = function ( { data } ) {

	const { index, position, options } = data;
	try {

		const geometry = new BufferGeometry();
		geometry.addAttribute( 'position', new BufferAttribute( position, 3, false ) );
		if ( index ) {

			geometry.setIndex( new BufferAttribute( index, 1, false ) );

		}

		const bvh = new MeshBVH( geometry, options );
		const serialized = MeshBVH.serialize( bvh, geometry, false );

		global.postMessage( {

			error: null,
			serialized,
			position,

		}, [ serialized.index.buffer, position.buffer ] );

	} catch ( error ) {

		global.postMessage( {

			error,
			serialized: null,

		} );

	}

};
