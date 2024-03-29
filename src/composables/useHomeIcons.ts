import { computed } from "vue";
import { connected, session } from "../main";

export const groups = [
  "account",
  "art",
  "blog",
  "camera",
  "debug",
  "draw",
  "game",
  "generators",
  "learn",
  "leopard",
  "math",
  "tests",
  "programming",
  "utilities",
  "wireless",
] as const;

export type Group = typeof groups extends readonly (infer T)[] ? T : never;

interface Icon {
  alt: string;
  description: string;
  group: Group[];
  isIndex?: boolean;
  keywords?: string;
  src: string;
  title: string;
  to: (string & {}) | "login";
}

export const homeIcons = computed(() => {
  connected.value;
  session.value;

  const els: (Icon | undefined)[] = [
    {
      alt: "A shirt with a zSnout fractal on it",
      description: "Buy a fractal shirt on the zSnout store.",
      group: ["art", "generators", "math"],
      src: "/images/store.webp",
      title: "Store",
      to: "https://store.zsnout.com",
      keywords: "stores fractalicious tshirts fractals buy purchase support",
    },

    connected.value && session.value
      ? {
          alt: "An outline of a person's head and upper body",
          description:
            "Log out of your account, change your username, and modify other account settings.",
          group: ["account"],
          keywords: "log out",
          src: "/images/my-account.webp",
          title: "My Account",
          to: "/my-account",
        }
      : undefined,

    connected.value && session.value
      ? {
          alt: "Two chat bubbles with one over the other",
          description:
            "Create, manage, and send messages over chats with your friends.",
          group: ["account", "wireless"],
          keywords: "online communication",
          src: "/images/my-chats.webp",
          title: "My Chats",
          to: "/my-chats",
        }
      : undefined,

    connected.value && session.value
      ? {
          alt: "Two chat bubbles with one over the other",
          description:
            "Make silly stories with your friends with some clever restrictions.",
          group: ["account", "wireless"],
          keywords: "online communication",
          src: "/images/my-stories.webp",
          title: "My Stories",
          to: "/my-stories",
        }
      : undefined,

    connected.value && !session.value
      ? {
          alt: "Someone holding up a sign saying 'Sign Up'",
          description:
            "Create a new account on zSnout to save fractals, Storymatic projects, and more.",
          group: ["account"],
          keywords: "account",
          src: "/images/account/sign-up.webp",
          title: "Sign Up",
          to: "login",
        }
      : undefined,

    connected.value && !session.value
      ? {
          alt: "A log in a fire that says 'Log In'",
          description:
            "Log in to an existing zSnout account to access your bookmarks and notes.",
          group: ["account"],
          keywords: "account",
          src: "/images/account/log-in.webp",
          title: "Log In",
          to: "login",
        }
      : undefined,

    {
      alt: "A list of two blog articles with their titles, colors, and descriptions",
      description:
        "Read blog articles posted by zSnout's creator and get updated when they're released.",
      group: ["blog"],
      isIndex: true,
      src: "/images/blog.webp",
      title: "The zSnout Blog",
      to: "/blog/",
    },

    {
      alt: "A three dimensional tunnel filled with colors and lasers",
      description:
        "View an amazing interactive and animated 3D tunnel of colors and lasers. Will be moved to 'Art' section soon.",
      group: ["art"],
      src: "/images/art/the-tunnel.webp",
      title: "The Tunnel",
      to: "/art/the-tunnel",
    },

    {
      alt: "The Mandelbrot Set in a rainbow background",
      description:
        "View amazing fractal images and interact with them live on your computer.",
      group: ["math", "art"],
      keywords: "math mandelbrot set",
      src: "/images/fractal-explorer.webp",
      title: "Fractal Explorer",
      to: "/fractal-explorer",
    },

    {
      alt: "Light green blobs in a blue background",
      description:
        "See a carefully curated collection of various interactive fractals.",
      group: ["math", "art"],
      isIndex: true,
      keywords: "math",
      src: "/images/fractal-presets/index.webp",
      title: "Fractal Presets",
      to: "/fractal-presets",
    },

    {
      alt: "A bunch of colored Hebrew words from the Torah",
      description:
        "Study and learn Hebrew text more easily with zSnout's trope highlighter.",
      group: ["learn"],
      keywords: "hebrew",
      src: "/images/trope-highlighter.webp",
      title: "Trope Highlighter",
      to: "/trope-highlighter",
    },

    {
      alt: "Multicolored overlapping rectangles with unique border styles",
      description:
        "See a collection of simple yet beautiful examples of abstract art.",
      group: ["art"],
      isIndex: true,
      keywords: "gradients squares rectangles circles ellipses",
      src: "/images/art/index.webp",
      title: "Art",
      to: "/art/",
    },

    {
      alt: "A chessboard with pieces scattered across its surface",
      description: "Play chess with a friend or against an AI.",
      group: ["game"],
      keywords: "ais friends stockfish",
      src: "/images/chess.webp",
      title: "Chess",
      to: "/chess",
    },

    {
      alt: "zSnout's bingo board with a few cells checked",
      description:
        "Use our quick and simple bingo board to play the game anytime.",
      group: ["game"],
      keywords: "board",
      src: "/images/bingo.webp",
      title: "Bingo",
      to: "/bingo",
    },

    {
      alt: "A strangely colored bookshelf",
      description:
        "Use our color controls to make strange images from your camera.",
      group: ["art", "camera"],
      keywords: "camera editor image live overcolorifier",
      src: "/images/camera/color-effects.webp",
      title: "Color Effects",
      to: "/camera/color-effects",
    },

    {
      alt: "An example game of Tick-oaT-Two",
      description:
        "Play the amazing redesign of TicTacToe by Oats Jenkins on zSnout.",
      group: ["game"],
      keywords: "tic tac toe tictactoe",
      src: "/images/tick-oat-two.webp",
      title: "Tick-oaT-Two",
      to: "/tick-oat-two",
    },

    {
      alt: "zSnout's bingo master board",
      description: "Call out bingo cards with zSnout's simple interface.",
      group: ["game"],
      src: "/images/bingo-master-board.webp",
      title: "Bingo Master Board",
      to: "/bingo-master-board",
    },

    {
      alt: "A snapshot of a car with only the edges highlighted",
      description:
        "Transform your world into one with only edges, not surfaces.",
      group: ["camera"],
      keywords: "camera image live",
      src: "/images/camera/edges.webp",
      title: "Camera Edges",
      to: "/camera/edges",
    },

    {
      alt: "A typewriter with the words 'Typed via zSnout magic' on the paper sheet",
      description:
        "Use a set of AirPods to type text on your screen without touching the keyboard.",
      group: ["wireless"],
      keywords: "airpods text",
      src: "/images/remote-typewriter.webp",
      title: "Remote Typewriter",
      to: "/remote-typewriter",
    },

    {
      alt: "An ASCII art version of Zachary's face (the creator of zSnout)",
      description:
        "Watch your own face and world transform into letters and symbols.",
      group: ["art", "camera"],
      keywords: "camera live text",
      src: "/images/camera/ascii-art.webp",
      title: "ASCII Art",
      to: "/camera/ascii-art",
    },

    connected.value && session.value
      ? {
          alt: "A notepad",
          description:
            "Create notes that will sync across your devices using our simple editor.",
          group: ["account"],
          keywords: "text editor cloud syncing",
          src: "/images/my-notes.webp",
          title: "My Notes",
          to: "/my-notes",
        }
      : undefined,

    {
      alt: "An AirPod superimposed on top of the Google Slides logo",
      description:
        "Use your AirPods 3 or Pro as a remote for a Google Slides presentation.",
      group: ["wireless"],
      keywords: "google presentation airpods remote",
      src: "/images/hands-free-slides.webp",
      title: "Hands Free Slides",
      to: "/hands-free-slides",
    },

    {
      alt: "Multiple zSnout icons stacked over each other in a screensaver",
      description:
        "View a mesmerizing screensaver of zSnout icons floating on top of each other.",
      group: ["art"],
      keywords: "icons",
      src: "/images/screensaver.webp",
      title: "Screensaver",
      to: "/screensaver",
    },

    {
      alt: "Multiple sections of an image in the wrong places",
      description:
        "Try to solve a game where you move pieces from an image around in the correct places.",
      group: ["game"],
      keywords: "pictures images slicing slices",
      src: "/images/slide-puzzle.webp",
      title: "Slide Puzzle",
      to: "/slide-puzzle",
    },

    {
      alt: "Leopards stacked on top of each other",
      description:
        "A leap of leopards (look it up) appear and fill your device's screen.",
      group: ["leopard"],
      keywords: "images",
      src: "/images/leopards.webp",
      title: "Leopards",
      to: "/leopards",
    },

    {
      alt: "A flower created from a rainbow gradient with a vignette on its exterior",
      description:
        "Experiment with amazing transformations of the complex plane.",
      group: ["math"],
      keywords: "math number equation",
      src: "/images/complex-explorer.webp",
      title: "Complex Explorer",
      to: "/complex-explorer",
    },

    {
      alt: "A sample of the Ulam Spiral, a simple yet complex object of mathematics",
      description:
        "View and interact with the amazing Ulam Spiral in real time.",
      group: ["art", "generators", "math"],
      keywords: "math number equation",
      src: "/images/ulam-spiral.webp",
      title: "Ulam Spiral",
      to: "/ulam-spiral",
    },

    {
      alt: "A five by five grid of circles; some are filled and some are not",
      description:
        "Try to fill the whole board of this simple yet addicting light game.",
      group: ["game"],
      keywords: "lightbulbs",
      src: "/images/light-the-bulbs.webp",
      title: "Light the Bulbs",
      to: "/light-the-bulbs",
    },

    {
      alt: "A YouTube thumbnail with a list of video formats and download buttons",
      description:
        "Download YouTube videos quickly, easily, and safely using our tool.",
      group: ["utilities"],
      keywords: "videos",
      src: "/images/youtube-downloader.webp",
      title: "YouTube Downloader",

      // This used to link to /youtube-downloader, but we want new users to use
      // the modern downloader.
      to: "https://yt.zsnout.com/",
    },

    {
      alt: "A white circle with black segments drawn within it",
      description:
        "Draw on a rotating tabletop using our simple drawing interface.",
      group: ["art", "draw"],
      keywords: "spinner drawings",
      src: "/images/drawing/turntable.webp",
      title: "Turntable",
      to: "/drawing/turntable",
    },

    {
      alt: "A black ball at a corner in a maze",
      description:
        "Twist and turn your phone or tablet to move a ball around in a randomly generated maze.",
      group: ["game"],
      keywords: "orientation mobile",
      src: "/images/maze-game.webp",
      title: "Maze Game",
      to: "/maze-game",
    },

    {
      alt: "A stack of three elements: a field with the number '177', a canvas with a graph of the 3n+1 sequence for 177, and the list of 3n+1 numbers for 177",
      description:
        "View the famous 3n+1 sequence for any number and a graph of its peaks.",
      group: ["math"],
      keywords: "conjecture 3n 1 hailstones numbers",
      src: "/images/collatz-evaluator.webp",
      title: "Collatz Evaluator",
      to: "/collatz-evaluator",
    },

    {
      alt: "A sign saying 'Hi' with arrows pointing right",
      description:
        "Draw on a table that moves beneath your finger as you create.",
      group: ["art", "draw"],
      keywords: "moving drawings",
      src: "/images/drawing/slider.webp",
      title: "Slider",
      to: "/drawing/slider",
    },

    {
      alt: "Some text in an input field with reversed text below it",
      description: "Enter any text into zSnout's backwards page to reverse it.",
      group: ["game"],
      keywords: "backwards texts",
      src: "/images/sdrawkcab.webp",
      title: "Sdrawkcab",
      to: "/sdrawkcab",
    },

    {
      alt: "A clock with flames trailing behind it",
      description: "See what your reaction time is with our simple tester.",
      group: ["tests"],
      keywords: "speed",
      src: "/images/reaction-time-tester.webp",
      title: "Reaction Time Tester",
      to: "/reaction-time-tester",
    },

    {
      alt: "A sample Storymatic program about groceries",
      description:
        "Experiment with 4 versions of a programming language designed by zSnout.",
      group: ["programming"],
      isIndex: true,
      keywords: "programming languages custom",
      src: "/images/storymatic/index.webp",
      title: "Storymatic",
      to: "/storymatic/",
    },

    {
      alt: "A lambda calculus program defining the numerals 0 through 9",
      description:
        "Run your lambda calculus functions in our interactive editor.",
      group: ["programming"],
      keywords: "programming languages",
      src: "/images/lambda-calculus/evaluator.webp",
      title: "Lambda Calculus Evaluator",
      to: "/lambda-calculus/evaluator",
    },

    {
      alt: "A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart.",
      description:
        "Convert your lambda calculus functions into valid and runnable JavaScript code.",
      group: ["programming"],
      keywords: "programming languages javascript",
      src: "/images/lambda-calculus/compiler.webp",
      title: "Lambda Calculus Compiler",
      to: "/lambda-calculus/compiler",
    },

    {
      alt: "A preview of the 'Same Number Generator' page",
      description:
        "It's like a random number generator, but it generates the same number every time.",
      group: ["generators"],
      keywords: "random numbers passkey password",
      src: "/images/same-number-generator.webp",
      title: "Same Number Generator",
      to: "/same-number-generator",
    },

    {
      alt: "A symbol representing an image with the text 'image not found' beneath the symbol.",
      description:
        "We're not sure why you'd go to the 404 page, but here's a link if you need it.",
      group: ["debug"],
      keywords: "not found error page",
      src: "/images/404.webp",
      title: "404 page",
      to: "/404",
    },

    {
      alt: "A magnifying glass inspects a bug hidden amongst bookshelves",
      description:
        "A collection of pages used to debug and test interfaces such as the canvas APIs.",
      group: ["debug"],
      isIndex: true,
      keywords: "webgl canvas",
      src: "/images/debug/index.webp",
      title: "Debug Pages",
      to: "/debug/",
    },
  ];

  return els.filter((e): e is NonNullable<typeof e> => !!e);
});
