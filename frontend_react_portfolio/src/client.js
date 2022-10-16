
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "q1btqo4l" ,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: "skxKiaX0cVPP9Ex5hLVrj7teBsms3dbwi7g6hFBt4DaQ5M2qh88JsDtJlBU542t2p7mylzY6ZhLwBFiXKVCyRsRVtGAcpn7GCEOYYl1i7ar65h0trvgYtZ9sg6MOiKXZM4IzQc2J9wdHIew4VKeQEZBgj9ZHKclP32q3NaswmWPc68ZG8RV3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

