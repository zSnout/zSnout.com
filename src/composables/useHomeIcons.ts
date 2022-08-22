import { computed } from "vue";
import { connected, session } from "../main";

export const homeIcons = computed(() => {
  connected.value;
  session.value;

  return [
    connected.value && session.value
      ? {
          alt: "An outline of a person's head and upper body",
          description:
            "Log out of your account, change your username, and modify other account settings.",
          keywords: "log out",
          src: "/images/my-account.png",
          title: "My Account",
          to: "/my-account",
        }
      : undefined,

    connected.value && !session.value
      ? {
          alt: "Someone holding up a sign saying 'Sign Up'",
          description:
            "Create a new account on zSnout to save fractals, Storymatic projects, and more.",
          keywords: "account",
          src: "/images/account/sign-up.png",
          title: "Sign Up",
          to: "login",
        }
      : undefined,

    connected.value && !session.value
      ? {
          alt: "A log in a fire that says 'Log In'",
          description:
            "Log in to an existing zSnout account to access your bookmarks and notes.",
          keywords: "account",
          src: "/images/account/log-in.png",
          title: "Log In",
          to: "login",
        }
      : undefined,

    {
      alt: "The Mandelbrot Set in a raindow background",
      description:
        "View amazing fractal images and interact with them live on your computer.",
      keywords: "math mandelbrot set",
      src: "/images/fractal-explorer.png",
      title: "Fractal Explorer",
      to: "/fractal-explorer",
    },

    {
      alt: "Light green blobs in a blue background",
      description:
        "See a carefully curated collection of various interactive fractals.",
      keywords: "math",
      src: "/images/fractal-presets/index.png",
      title: "Fractal Presets",
      to: "/fractal-presets",
    },

    {
      alt: "A bunch of colored Hebrew words from the Torah",
      description:
        "Study and learn Hebrew text more easily with zSnout's trope highlighter.",
      keywords: "hebrew",
      src: "/images/trope-highlighter.png",
      title: "Trope Highlighter",
      to: "/trope-highlighter",
    },

    {
      alt: "A sample Storymatic program about groceries",
      description:
        "Experiment with 4 versions of a programming language designed by zSnout.",
      keywords: "programming languages custom",
      src: "/images/storymatic/index.png",
      title: "Storymatic",
      to: "/storymatic/",
    },

    {
      alt: "Multicolored overlapping rectangles with unique border styles",
      description:
        "See a collection of simple yet beautiful examples of abstract art.",
      keywords: "gradients squares rectangles circles ellipses",
      src: "/images/art/index.png",
      title: "Art",
      to: "/art/",
    },

    {
      alt: "A strangely colored bookshelf",
      description:
        "Use our color controls to make strange images from your camera",
      keywords: "colors editor image live overcolorifier",
      src: "/images/camera-modifier.png",
      title: "Camera Modifier",
      to: "/camera-modifier",
    },

    {
      alt: "A typewriter with the words 'Typed via zSnout magic' on the paper sheet",
      description:
        "Use a set of AirPods to type text on your screen without touching the keyboard.",
      keywords: "airpods text",
      src: "/images/remote-typewriter.png",
      title: "Remote Typewriter",
      to: "/remote-typewriter",
    },

    {
      alt: "An ASCII art version of Zachary's face (the creator of zSnout)",
      description:
        "Watch your own face and world transform into letters and symbols.",
      keywords: "camera live text",
      src: "/images/ascii-art.png",
      title: "ASCII Art",
      to: "/ascii-art",
    },

    connected.value && session.value
      ? {
          alt: "A notepad",
          description:
            "Create notes that will sync across your devices using our simple editor.",
          keywords: "text editor cloud syncing",
          src: "/images/my-notes.png",
          title: "My Notes",
          to: "/my-notes",
        }
      : undefined,

    {
      alt: "An AirPod superimposed on top of the Google Slides logo",
      description:
        "Use your AirPods 3 or Pro as a remote for a Google Slides presentation.",
      keywords: "google presentation airpods remote",
      src: "/images/hands-free-slides.png",
      title: "Hands Free Slides",
      to: "/hands-free-slides",
    },

    {
      alt: "Leopards stacked on top of each other",
      description:
        "A leap of leopards (look it up) appear and fill your device's screen.",
      keywords: "images",
      src: "/images/leopards.png",
      title: "Leopards",
      to: "/leopards",
    },

    {
      alt: "A flower created from a rainbow gradient with a vignette on its exterior.",
      description:
        "Experiment with amazing transformations of the complex plane.",
      keywords: "math number equation",
      src: "/images/complex-explorer.png",
      title: "Complex Explorer",
      to: "/complex-explorer",
    },

    {
      alt: "A white circle with black segments drawn within it",
      description:
        "Draw on a rotating tabletop using our simple drawing interface.",
      keywords: "spinner drawings",
      src: "/images/drawing/turntable.png",
      title: "Turntable",
      to: "/drawing/turntable",
    },

    {
      alt: "A black ball at a corner in a maze",
      description:
        "Twist and turn your phone or tablet to move a ball around in a randomly generated maze.",
      keywords: "orientation mobile",
      src: "/images/maze-game.png",
      title: "Maze Game",
      to: "/maze-game",
    },

    {
      alt: "A sign saying 'Hi' with arrows pointing right",
      description:
        "Draw on a table that moves beneath your finger as you create.",
      keywords: "moving drawings",
      src: "/images/drawing/slider.png",
      title: "Slider",
      to: "/drawing/slider",
    },

    {
      alt: "A clock with flames trailing behind it",
      description: "See what your reaction time is with our simple tester.",
      keywords: "speed",
      src: "/images/reaction-time-tester.png",
      title: "Reaction Time Tester",
      to: "/reaction-time-tester",
    },

    {
      alt: "A lambda calculus program defining the numerals 0 through 9",
      description:
        "Run your lambda calculus functions in our interactive editor.",
      keywords: "programming languages",
      src: "/images/lambda-calculus/evaluator.png",
      title: "Lambda Calculus Evaluator",
      to: "/lambda-calculus/evaluator",
    },

    {
      alt: "A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart.",
      description:
        "Convert your lambda calculus functions into valid and runnable JavaScript code.",
      keywords: "programming languages javascript",
      src: "/images/lambda-calculus/compiler.png",
      title: "Lambda Calculus Compiler",
      to: "/lambda-calculus/compiler",
    },

    {
      alt: "A preview of the 'Same Number Generator' page",
      description:
        "It's like a random number generator, but it generates the same number every time.",
      keywords: "random numbers passkey password",
      src: "/images/same-number-generator.png",
      title: "Same Number Generator",
      to: "/same-number-generator",
    },

    {
      alt: "A symbol representing an image with the text 'image not found' beneath the symbol.",
      description:
        "We're not sure why you'd go to the 404 page, but here's a link if you need it.",
      keywords: "not found error page",
      src: "/images/404.png",
      title: "404 page",
      to: "/404",
    },

    {
      alt: "A magnifying glass inspects a bug hidden amongst bookshelves",
      description:
        "A collection of pages used to debug and test interfaces such as the canvas APIs.",
      keywords: "webgl canvas",
      src: "/images/debug/index.png",
      title: "Debug Pages",
      to: "/debug/",
    },
  ].filter(
    (
      e
    ): e is {
      alt: string;
      description: string;
      keywords: string;
      src: string;
      title: string;
      to: (string & {}) | "login";
    } => !!e
  );
});