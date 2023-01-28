# How to Become a Web Developer

Let me put this out there right from the start: I'm no expert.

_But_ I do know you can use the `<span>` tag to do various great things!

Also, `const hey = new Date()` this line gives you great blah and whatever you need to do here too.

Great! You didn't leave in disgust. now let me explain...

I also explain this in my post on [what to include in your portfolio](what-do-i-include-in-my-portfolio)

```
const testing = await getPosts();
console.log(testing[0]);
```

And now we're going to talk about React fragments.

###### Oh hey

Adjacent jsx elements must be contained within a parent element. If you don't want to create a div to do this, you can contain them within a fragment like so:

```
class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
      // <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
    );
  }
}
```

I don't claim to be some all-seeing development God, dishing out commandments you must religiously follow before you earn your developer wings. But, I do have the benefit of having gone through the whole process myself.

I was in a completely different career when I decided I wanted to make a change. From knowing little more than how to make a basic "hello world" webpage, I was able to teach myself everything I needed to know in order to land that first, satisfying web development job. If I can do it, so can you.

It would be arrogant as hell for me to start telling you "this is exactly what you have to do to become a web developer" with only five months' experience in the job. But what I <em>can</em> do is share with you the process I went through personally. If it's beneficial to you, then fantastic.

## Is It The Right Job For Me?

It would be remiss of me to blindly go on explaining how to become a web developer, without at least a brief mention of the type of individual this job would typically suit. Chances are, if you're reading this you already have a good idea that development is for you. If on the other hand, you're not quite sure, hopefully this will help you in making your decision. You can also find out exactly what a web developer does on a day to day basis.

To start with, the most obvious advantage for any potential developer would be an interest in computing in general. If you already struggle to use a mouse, the development learning curve may simply be too steep. But of course, anything is possible if you're determined enough.

A methodical, well organised person will likely have an advantage when it comes to development. The ability to problem-solve until you overcome a particularly headache-inducing issue will also benefit you greatly. If you know the computer would be rapidly flying out the window long before you manage to squash a bug in your code, development may not be for you!

## Enough Already! What Do I Need To Learn?

HTML and CSS. I started with HTML first which is the most logical way to go. Basically everything you see on a website is written in HTML, from the text to the cute images of cats. The style of the content (text colour, size, image width etc) is determined by CSS. You can make it bright pink with neon green highlights if you want. Yes really.

[Codecademy](https://www.codecademy.com/learn) is a fantastic resource, not just for HTML and CSS but loads more besides. I highly recommend checking it out - it's a great place to at least make a start.

In terms of the very basics of what it takes to create a website, there you have it. Chances are though, you'll need a bit more knowledge before you become an attractive proposition to an employer.

From HTML and CSS, I moved onto JavaScript. This is really where things start to get interesting. With JavaScript you can start to interact with the content on the page. For example, you could make it so a section of the page disappears and reappears at the touch of a button. You can pop up messages on screen which a user must read before closing (but please don't!).

I used [this comprehensive resource](http://javascriptissexy.com/how-to-learn-javascript-properly/) when I was learning, and it's great for advising the best order in which to do things. JavaScript is such a huge subject it's hard to know where to start. This helps a lot with that.

After you have a solid understanding of JavaScript, you can move onto jQuery. This is a library which makes it easier to use JavaScript, which is why you should learn it afterwards. I'm sure there are probably people who skipped JavaScript and moved immediately to jQuery - but in my opinion it's best to learn the foundations of something before you begin to build on top of it.

[Try jQuery](http://try.jquery.com/) is one of the sites I found very helpful when learning this useful library.

Next up, an area you will never be able to escape as a web developer - responsive design and media queries. You know how your favourite website somehow manages to look great on a desktop monitor, but also amazing on your phone too - cleverly resizing and reordering things into a single column to make it easy to use? You have responsive design to thank for that. By adding media queries into your CSS, you can change the style of your website based on clever things like how wide the screen is. Indispensable knowledge for any decent web developer.

This is a code snippet coming up...

```
const testing = await getPosts();
console.log(testing[0]);
```

## I Brilliantly Learnt All That - What's Next?

Next you can put your newly acquired skills into practice. It's one thing knowing you can do the job, but is an employer just supposed to take your word for it? It's fair to say that's pretty unlikely. You need to show them what you can do and wow them into giving you a job!

## Produce A Portfolio Website

Put your skills to good use. In hindsight, my portfolio site wasn't substantial enough. In my opinion you probably need at least five nice sites up and running in addition to your actual portfolio site to really market yourself appropriately. Try and make each one unique and demonstrate a different design flare or technical skill. Link to each one from your main portfolio - you want this site to gather together all of the amazing stuff you can do.

## Gulp! Is it Time To Start Job Hunting?

Yes! Get that CV up to date and start applying. At this point you'll probably want to look at junior positions. I found that most job offers that didn't include this key word in the job title were looking for someone with way more experience than I. In actual fact, even some of the junior positions expect you to have one or more years' work experience. I'm still baffled by this one! I guess you could say a developer with one year in the job is still junior - but it seems like it just makes it all the more difficult for someone starting at the very beginning to search for a job.

## I Got An Interview!

Congratulations! All that hard work is finally starting to pay off. In my case, it was actually rather unexpected. I had been looking in London for jobs - as it seemed the most obvious place to me. But out of the blue I got a call from a recruiter in my local area (well outside London) who had a position he thought would be suitable.

A slight side-note here - take what recruiters tell you with a pinch of salt. Their job is to fill that position, and many will simply tell you what you want to hear just to get you along to an interview. Make sure the job actually sounds appropriate for your experience and skills. Some recruiters (possibly lots) have no clue about the job in general, they are just trying to tick items off a list.

I went along to the interview, it went well and I was lucky enough to be offered the job. It was for slightly less money than the job description had advertised, simply because I was unproven at that point. A few months' probation proved I could do the job and my salary increased accordingly.

My advice - if at all possible - forget about salary and focus on whether the job is the right one for you. This first job is all about getting experience under your belt and getting your foot in the door, which is absolutely invaluable. I have learnt a huge amount in only five months and every day I'm learning something new. Get experience, get good at what you do. Impress your employer, make yourself invaluable. Take full advantage of your fortunate position and cram your head full of knowledge that you can't get elsewhere. If your head starts bulging from all of the extra information you're consuming, make some room by kicking out useless stuff like the alphabet and how to walk straight.

## Keep Improving Your Skills

You did it! You became a web developer. But if you think you can rest on your laurels you're sadly mistaken. Things move quickly. You need to keep your skills bang up to date. If you don't keep on top of the new trends you'll get left behind and all your hard work will be for nothing. In a future post I'll list some excellent sources that will help you stay current and informed on all the latest web development news.

## Diversify

At the moment your skills make you a "front-end" web developer. You take care of all the pretty things a website visitor sees. A "back-end" developer deals with all the things a user doesn't see - on the web server (the database for example). Once you have experience in both areas, you become a "full stack" developer! I won't go into detail about that now, maybe that's one for a future post. But you can quite easily make a career out of one or the other (or both) disciplines. What it really comes down to is what you enjoy doing most. Only by experimenting will you learn what's right for you.

## A Brief Summary

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>Responsive design / media queries</li>
<li>Build a portfolio website</li>
<li>Start applying after you've made yourself as employable as possible</li>
<li>When you land a job, learn as much as you can and keep improving your skills</li>
</ul>

I really hope all this is useful to you in your quest to become a web developer. Please let me know if there's anything else you'd like to know, I'd be only too happy to help.

</div>
