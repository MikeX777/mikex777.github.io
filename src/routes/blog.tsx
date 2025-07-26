import { createFileRoute } from '@tanstack/react-router'
import { Blog } from '~/views/Blog/Blog'

export const Route = createFileRoute('/blog')({
  component: Blog,
});
