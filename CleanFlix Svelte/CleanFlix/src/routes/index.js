
	import sanityClient from '@sanity/client';
	import createImageUrlBuilder from '@sanity/image-url';
	import index from './index.svelte';

	export const client = sanityClient({
		projectId: 'dt5nrqzl',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false
	});

	export async function get() {
		const res = await client.fetch(`*[_type == "movies"]`);
		const data = await client.fetch(`*["recent" in tags]`);
		

		if (data) {
			return {
				status: 200,
				body: {
					movies: res,
					recents: data
					
				}
			};
		}
		return {
			status: 500,
			body: new Error('Prop error')
		};
	}



	

	
	export function urlFor(source) {
		const builder = createImageUrlBuilder(client);
		return builder.image(source);
	}
	



