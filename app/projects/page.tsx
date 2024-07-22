import React from 'react';
import PostCard from '../../components/PostCard';
import { getAllPosts } from '../../lib/cosmic';

export default async function Projects(): Promise<JSX.Element> {
    return (
        <h1>Projects</h1>
    );
}
export const revalidate = 60;
