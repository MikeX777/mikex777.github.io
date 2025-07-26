import { useRouter } from '@tanstack/react-router'
import { Stack, Typography, Divider, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const BlogPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5)
}))

export function Blog() {
  const router = useRouter()

  return (
    <>
      <Stack alignItems="center">
        <BlogPaper elevation={2}>
          <Typography variant="h6" gutterBottom>
            Initial Post - Carthartic Ambition
          </Typography>

          <Divider />

          <Typography variant="body1" align="justify" gutterBottom>
            Hello and welcome. I want take a moment to introduce myself. My name is Mike Cuomo. I have been a developer from just out of school. I love computers and working in this environment. I would like to produce and build and I thought a good avenue for that would be through buildling a website and recording my thoughts. I do this a bit in a private manner, but I wanted to experiment with at least the performance of making it public. So thank you for stopping in, feel free to poke around, and I welcome feedback if I have built that.
          </Typography>

          <Typography variant="body1" align="justify" gutterBottom>
            I see this as place to practice my dev, and my writing skills, since I am trying to build something specific, it will keep me on task to make the specific item. I think this pairs really nicely with what I have been thinking about the past few days and I would like to explore, and that is something that I am calling Cathartic Ambition.
          </Typography>

          <Typography variant="body1" align="justify" gutterBottom>
            To be frank, this might be entirely projection, especially considering the tone and meaning of the previous two paragraphs, but at least from my perspective, I have noticed what I find to be interesting interaction with those in my age group. When I speak to those around me, I feel as if they are focused on doing something and creating something with their lives, which are extremely valid concerns. But there is a air of despiration in a sense that conveys the limited experience that one might have. They have not done something of this scale before, but the need to, it is the next step in their lives or else. Or else what I am not sure, but there is a subtle undertone that it is not an option.
          </Typography>

          <Typography variant="body1" align="justify" gutterBottom>
            Now I still fairly young myself but I feel as if I am ending the transition out of being able to say that. But I am aware of my own response in the sight of the future. I have had big ideas that I thought should capture my whole life. I have thought that this was something that I needed to do, and there was a subtle undertone of 'and this will change the world.' I think there is something important to ambiiton, which I do believe this is. I think in most contexts ambition is an extremely desirable trait, and those with it are the ones who can and do create great things. But there is something about this specific iteration of youth ambition that I find quite sinister.
          </Typography>

          <Typography variant="body1" align="justify" gutterBottom>
            At least in my case this ambition seemed to be used as a catharsis, without actually leading to any action. Speaking for myself, there are fears and worries in me that I am not special, that I will not amount to much more than I currently do. These thoughts were a way to escape that feeling, and to bring what I preceived as more value into my life. But shortly after these thoughts, the power and drive would fade, usually quite quickly. This might be due in part to the size of the action that would need to take place. I feel as if ambition drives for big things, and shines a spotlight on a future with enormous accomplishment. Thoughts like these would often be quite large, and I do not want to say unattainable, but they were so big that the first step was often difficult to pinpoint, and maybe this would lead to the dream fading. I have also heard before of writers experiencing an phenomeon where if they told someone part of their story, they would not have as much of a desire to continue writing, because to part of them, drive of the story being told had already been satisfied.
          </Typography>


          <Typography variant="body1" align="justify" gutterBottom>
            Part of me wonders if this is what the goal of this ambition is. I am only left with my personal experience, and that of those that people told me, which is a bit of selection bias, but there does seem to be some sort of social function sharing of dreams. In the sense since you think of this and things like this, can you claim some of the credit as someone doing so? Obviously materially not, but I do notice that when older people talk to younger people with this form of ambition there does seem to be a social expectation of them to encourage. And honestly, good. Being a downer about someone's dream sucks. I just find that due to the age, and the legitimate limited time a person may have spent on this earth, simply having an ambition can be valued, regardless of actually doing something with it. When does that go away? Do people do things, or does the cathartic ambition itself go away?
          </Typography>

          <Typography variant="caption">
            Date Written: 25/07/2025
          </Typography>
        </BlogPaper>
      </Stack>
    </>
  )
}
