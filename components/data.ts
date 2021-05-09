import useTranslation from "next-translate/useTranslation";

export interface ImageProps {
  url: string;
}

export interface CardItemProps {
  title?: string;
  direction?: "row" | "column";
  id?: string;
  item?: boolean;
  price: string;
  desc: string;
  images: Array<ImageProps>;
  index?: string;
  features?: string[];
}

export interface CardProps {
  type: string;
  content: Array<CardItemProps>;
}

const useData = () => {
  const { lang } = useTranslation();

  const pt: Array<CardProps> = [
    {
      type: "VTuber",
      content: [
        {
          title: "Corpo Todo",
          desc: "Half Body Art ready to rig for Streaming/Recording as Vtuber",
          price: "100",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806899476841234482/fyhaen.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806901002401349632/alpakapng.png",
            },
          ],
        },
        {
          title: "Full Body",
          desc: "Full Body Art ready to rig for Streaming/Recording as Vtuber",
          price: "150",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991535887351808/SnowModel.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991549283827733/yukipng.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991457264599070/kit.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991558335397928/yumi1.png",
            },
          ],
        },
      ],
    },
    {
      type: "Art",
      content: [
        {
          title: "Bust",
          desc:
            "Bust up character of your choice, with no background or a simple one/ flat color.",
          price: "40",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/806544763699724289/806963458481455124/KOkkz9S0_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806981513996533810/A9JK3yeC.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964314376241192/amq1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964400711270441/amq2.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964513597292564/artia2.png",
            },
          ],
        },
        {
          title: "Waist up",
          desc:
            "Waist up (or a little more) Art with no Background, or a flat color one, of the character of your choice",
          price: "60",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950273649737798/pamy.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950277617025115/Hime_goto.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950283468472390/kiara.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806960341795864646/haruko.png",
            },
          ],
        },
        {
          title: "Full",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          desc:
            "Full Body Art with no Background, or a flat color one of the character of your choice",
          price: "80",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806975093317566474/takemi.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806975455609225276/hayasaka.png",
            },
          ],
        },
      ],
    },
    {
      type: "Stream",
      content: [
        {
          title: "Emotes",
          desc:
            "Emotes with the character of your choice (for Youtube, Twitch, Discord and others).",
          price: "20",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/804204717386367056/Group_1_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/804206448056860682/Group_1_2.png",
            },
          ],
        },
        {
          title: "Overlay",
          desc: "Custom overlay with your stream style!",
          features: [
            "Can be animated (+50% on the price).",
            "The price is relative to a single overlay, if for exemple you need a starting and a chatting overlay order 2 items",
          ],
          price: "10",
          direction: "row",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807723544393285632/Desktop_-_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005702643384330/Fubuki.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005704300527656/Overlay_2.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005705218293800/Risu.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005708175802368/Desktop_-_12.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005700223795260/Frame_5.png",
            },
          ],
        },
        {
          title: "Overlay Pack",
          desc: "Custom overlay pack with 4 items!",
          features: ["Can be animated (+50% on the price)."],
          price: "30",
          direction: "row",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807728506083606528/Desktop_-_4.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807729065003057172/Frame_2.png",
            },
          ],
        },
        {
          title: "Panels",
          desc: "Share information with custom panels!",
          price: "4",
          direction: "row",
          features: ["Can be animated (+50% on the price)."],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734606332952586/Group_3.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734607557689364/Group_4.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734608324984832/Group_5.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734609500176404/Group_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734610372853811/Group_2.png",
            },
          ],
        },
      ],
    },
  ];

  const en: Array<CardProps> = [
    {
      type: "VTuber",
      content: [
        {
          title: "Half Body",
          desc: "Half Body Art ready to rig for Streaming/Recording as Vtuber",
          price: "100",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806899476841234482/fyhaen.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806901002401349632/alpakapng.png",
            },
          ],
        },
        {
          title: "Full Body",
          desc: "Full Body Art ready to rig for Streaming/Recording as Vtuber",
          price: "150",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991535887351808/SnowModel.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991549283827733/yukipng.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991457264599070/kit.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806991558335397928/yumi1.png",
            },
          ],
        },
      ],
    },
    {
      type: "Art",
      content: [
        {
          title: "Bust",
          desc:
            "Bust up character of your choice, with no background or a simple one/ flat color.",
          price: "40",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/806544763699724289/806963458481455124/KOkkz9S0_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/806981513996533810/A9JK3yeC.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964314376241192/amq1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964400711270441/amq2.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806964513597292564/artia2.png",
            },
          ],
        },
        {
          title: "Waist up",
          desc:
            "Waist up (or a little more) Art with no Background, or a flat color one, of the character of your choice",
          price: "60",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950273649737798/pamy.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950277617025115/Hime_goto.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806950283468472390/kiara.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806960341795864646/haruko.png",
            },
          ],
        },
        {
          title: "Full",
          features: [
            "Can have additional characters (Each one is +60% of the price).",
            "Can have background (up to +50% of the price)",
          ],
          desc:
            "Full Body Art with no Background, or a flat color one of the character of your choice",
          price: "80",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806975093317566474/takemi.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/806975455609225276/hayasaka.png",
            },
          ],
        },
      ],
    },
    {
      type: "Stream",
      content: [
        {
          title: "Emotes",
          desc:
            "Emotes with the character of your choice (for Youtube, Twitch, Discord and others).",
          price: "20",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/804204717386367056/Group_1_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/684813872363995156/804206448056860682/Group_1_2.png",
            },
          ],
        },
        {
          title: "Overlay",
          desc: "Custom overlay with your stream style!",
          features: [
            "Can be animated (+50% on the price).",
            "The price is relative to a single overlay, if for exemple you need a starting and a chatting overlay order 2 items",
          ],
          price: "10",
          direction: "row",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807723544393285632/Desktop_-_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005702643384330/Fubuki.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005704300527656/Overlay_2.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005705218293800/Risu.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005708175802368/Desktop_-_12.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/353348612501012481/807005700223795260/Frame_5.png",
            },
          ],
        },
        {
          title: "Overlay Pack",
          desc: "Custom overlay pack with 4 items!",
          features: ["Can be animated (+50% on the price)."],
          price: "30",
          direction: "row",
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807728506083606528/Desktop_-_4.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807729065003057172/Frame_2.png",
            },
          ],
        },
        {
          title: "Panels",
          desc: "Share information with custom panels!",
          price: "4",
          direction: "row",
          features: ["Can be animated (+50% on the price)."],
          images: [
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734606332952586/Group_3.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734607557689364/Group_4.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734608324984832/Group_5.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734609500176404/Group_1.png",
            },
            {
              url:
                "https://cdn.discordapp.com/attachments/670725281270726687/807734610372853811/Group_2.png",
            },
          ],
        },
      ],
    },
  ];

  return lang === "pt-BR" ? pt : en;
};

export default useData;
