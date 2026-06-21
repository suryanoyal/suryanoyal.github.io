// ============================================================
// PORTFOLIO DATA MODULE
// All content data separated from presentation
// ============================================================

const PORTFOLIO = {

  // ─── PERSONAL INFO ───────────────────────────────────────
  personal: {
    name: 'Noyal Surya J J',
    headline: 'Designing Digital Experiences That People Remember',
    subheadline: 'Creative Designer · Brand Strategist · Content Creator',
    roles: [
      'Creative Designer',
      'Brand Designer',
      'Social Media Designer',
      'Content Creator',
      'Creative Strategist'
    ],
    bio: `I'm a multidisciplinary creative designer with a passion for crafting memorable brand experiences. From visual identity systems to social media campaigns and motion graphics — I bring ideas to life with precision, storytelling, and bold aesthetics. Currently based in Dubai, I help brands stand out in the digital landscape through strategic design thinking and pixel-perfect execution.`,
    location: 'Dubai, UAE',
    avatar: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/profile.jpg',
    resume: 'files/NOYAL SURYA J J_CV.pdf'
  },

  // ─── STATS ───────────────────────────────────────────────
  stats: [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Clients Served' },
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 7, suffix: '', label: 'Brand Identities' }
  ],

  // ─── SKILLS ──────────────────────────────────────────────
  skills: [
    {
      category: 'Design',
      icon: '✦',
      items: [
        { name: 'Brand Identity', level: 95 },
        { name: 'Visual Branding', level: 94 },
        { name: 'Creative Direction', level: 93 },
        { name: 'Typography', level: 90 },
        { name: 'Graphic Design', level: 92 },
        { name: 'Visual Storytelling', level: 95 },
        { name: 'UGC Strategy', level: 88 },
        { name: 'Content Design', level: 91 },
        { name: 'Brand Voice', level: 89 }
      ]
    },
    {
      category: 'Motion',
      icon: '◈',
      items: [
        { name: 'Video Editing', level: 96 },
        { name: 'Motion Graphics', level: 88 },
        { name: 'Reels Production', level: 95 },
        { name: 'Color Grading', level: 85 },
        { name: 'Sound Design', level: 78 },
        { name: 'Retention-focused Pacing', level: 92 },
        { name: 'Storytelling & Script Writing', level: 94 },
        { name: 'Short-form Video Strategy', level: 93 }
      ]
    },
    {
      category: 'Strategy',
      icon: '◇',
      items: [
        { name: 'Social Media Strategy', level: 96 },
        { name: 'Instagram & YouTube Growth', level: 95 },
        { name: 'Viral Content Creation', level: 94 },
        { name: 'Campaign Management', level: 91 },
        { name: 'Performance Marketing', level: 88 },
        { name: 'Conversion Optimization', level: 87 },
        { name: 'A/B Testing & Insights', level: 90 },
        { name: 'Audience Research & Segmentation', level: 89 },
        { name: 'Digital Marketing', level: 92 }
      ]
    },
    {
      category: 'Tools',
      icon: '⬡',
      items: [
        { name: 'Adobe Premiere Pro', level: 95 },
        { name: 'Adobe After Effects', level: 85 },
        { name: 'Adobe Photoshop', level: 96 },
        { name: 'Adobe Illustrator', level: 92 },
        { name: 'Figma', level: 88 },
        { name: 'Meta Business Suite', level: 90 },
        { name: 'Instagram Insights', level: 92 },
        { name: 'YouTube Studio', level: 89 },
        { name: 'CapCut', level: 94 },
        { name: 'Canva', level: 90 }
      ]
    }
  ],

  // ─── GRAPHIC DESIGN PROJECTS ─────────────────────────────
  designs: [
    {
      id: 'd1',
      title: 'Madasa\'24 – UX Vertex Event Poster',
      description: 'A vibrant event poster for Panimalar Engineering College\'s Madasa\'24 – UX Vertex. Futuristic purple–blue gradient with abstract geometric patterns and UI-inspired elements. Illustrated character interacts with floating digital interface panels, symbolizing user experience and interface design.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/preface-2-pict-2%20(1).jpg',
      tags: ['Event', 'Poster', 'UX']
    },
    {
      id: 'd2',
      title: 'Robotics Fast Track – Promotional Poster',
      description: 'High-impact promotional poster for Otomatiks Robotics. Features a futuristic humanoid robot wearing a VR headset. Dark blue gradient with subtle geometric overlays, bold red and white typography emphasizing key information.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/Social%20Media%20Poster.png',
      tags: ['Social Media', 'Education']
    },
    {
      id: 'd3',
      title: 'TEDx – Organizing Team Showcase',
      description: 'Team introduction poster for TEDx Panimalar Engineering College. Dark futuristic background with red polygonal wireframe elements, aligned with "Future Forward" theme. Individual portraits in structured grid with purple gradient overlay.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/We%20are%20the%20organizers%20for%20the%20TEDx%20event✨%20which%20is%20going%20to%20be%20held%20at%20Panimalar%20Engineering%20Co%20(1).jpg',
      tags: ['TEDx', 'Team', 'Branding']
    },
    {
      id: 'd4',
      title: 'PEC Hacks – Bronze Sponsor',
      description: 'Minimal sponsor announcement for PEC Hacks featuring Balsamiq. Dark stage-like background with warm spotlight effects. Metallic gold text creates a premium feel with strong brand recognition.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/_%20Exciting%20Announcement!%20_We_re%20thrilled%20to%20welcome%20________%20as%20a%20Bronze%20Sponsor%20for%20%20(1).jpg',
      tags: ['Hackathon', 'Sponsor']
    },
    {
      id: 'd5',
      title: 'PEC Hacks – Silver Sponsor',
      description: 'Sponsor announcement for PEC Hacks with ETHIndia. Cool monochromatic blue-grey background with soft spotlight effects. Metallic typography reinforces premium tech-forward identity.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/_%20Exciting%20Announcement!%20_We_re%20thrilled%20to%20welcome%20________%20as%20a%20Silver%20Sponsor%20for%20%20(1).jpg',
      tags: ['Hackathon', 'Sponsor']
    },
    {
      id: 'd6',
      title: 'PEC Hacks – Gold Sponsor',
      description: 'Sponsor announcement highlighting Polygon as Gold Sponsor. Warm golden spotlight effects with metallic gold typography and purple Polygon logo for strong contrast.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/_%20Exciting%20Announcement!%20_We_re%20thrilled%20to%20welcome%20_______%20as%20a%20Gold%20Sponsor%20for%20___%20(1).jpg',
      tags: ['Hackathon', 'Sponsor']
    },
    {
      id: 'd7',
      title: 'PEC Hacks 2.0 – Registrations Open',
      description: 'Digital promotional poster for PEC Hacks 2.0. Futuristic neon aesthetic with dark purple/blue gradient, glitch-inspired elements, and 3D neon typography effect creating strong visual impact.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/_%20Get%20Ready%20for%20%20PEC%20Hacks%202.0!%20_Registrations%20are%20NOW%20OPEN%20for%20the%20most%20anticipated%20hackatho%20(1).webp',
      tags: ['Hackathon', 'Campaign']
    },
    {
      id: 'd8',
      title: 'Thanga Mazhai Stars – Event Ticket',
      description: 'Formal event ticket design with bold geometric layout featuring orange, navy blue, and yellow color blocks. Incorporates brand logos, date panel, QR code, and star-themed graphics for a premium event aesthetic.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/1.5%20(1).jpg',
      tags: ['Event', 'Ticket Design']
    },
    {
      id: 'd9',
      title: 'Pregnancy & Infant Loss – Awareness',
      description: 'Sensitive awareness poster for Motherly. Clean white background with soft pastel illustrations including symbolic pink and blue ribbon. Calm, empathetic visual language with clear call-to-action.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/1.png',
      tags: ['Healthcare', 'Awareness']
    },
    {
      id: 'd10',
      title: 'Breast Cancer Awareness – Campaign',
      description: 'Pastel-themed awareness poster for Motherly focusing on preventive maternal care. Light pink gradient with heart-shaped elements and cloud motifs evoking warmth and reassurance.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/2.png',
      tags: ['Healthcare', 'Campaign']
    },
    {
      id: 'd11',
      title: 'PEC Hacks 2024 – Launch Event',
      description: 'Promotional launch poster for PEC Hacks 2024. Deep purple gradient with bold gold typography creating a premium futuristic feel. Structured layout with event details, QR code, and partner logos.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/A%20Promising%20Beginning%20for%20PEC%20Hacks%202024!Our%20recent%20launch%20event%20was%20a%20resounding%20success,%20sett%20(1).webp',
      tags: ['Hackathon', 'Event']
    },
    {
      id: 'd12',
      title: 'Brewscape – Coffee Brand Visual',
      description: 'Premium product promotion for Brewscape international coffee blends. Warm brown/amber palette evoking freshness and luxury. Lifestyle photography with modern advertising design for e-commerce and social media.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/Brewscape.jpg',
      tags: ['Product', 'Brand']
    },
    {
      id: 'd13',
      title: 'IGENE VFX – Guest Session Poster',
      description: 'Promotional poster for VFX technology guest session. Deep purple gradient with flowing abstract lines and floating shapes. Speaker portraits in circular frames with clear hierarchy and credibility.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/final%20post_Mesa%20de%20trabajo%201%20(1).png',
      tags: ['Education', 'Event']
    },
    {
      id: 'd14',
      title: 'TEDx – "Future Forward" Event Poster',
      description: 'Dynamic promotional poster for TEDx themed "Future Forward." Dark red/black abstract background with motion textures. Bold white typography and clear event details with registration QR code.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/get%20(1)%20(1).jpeg',
      tags: ['TEDx', 'Event']
    },
    {
      id: 'd15',
      title: 'PEC Hacks – Registration Extension',
      description: 'Bold announcement poster in partnership with MLH. Layered geometric shapes with high-contrast navy, yellow, red, and blue palette. Strong typography emphasizing urgency.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/get%20(2).jpeg',
      tags: ['Hackathon', 'Campaign']
    },
    {
      id: 'd16',
      title: 'Madasa\'24 – Technical Symposium',
      description: 'Comprehensive event poster for inter-department technical symposium. Vibrant dual-tone gradient with neon geometric shapes. High information density with strong visual hierarchy for both digital and print.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/Madasa\'24%20(1).jpeg',
      tags: ['Event', 'Academic']
    },
    {
      id: 'd17',
      title: 'PEC Hacks 2024 – National Hackathon',
      description: 'Clean, high-information poster for 36-hour national hackathon. Minimal white layout with soft gradient accents. Strong emphasis on typography and structured content with central QR code.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/PEC%20Hacks%202024-%20Poster%20(1).webp',
      tags: ['Hackathon', 'Print']
    },
    {
      id: 'd18',
      title: 'PEC Hacks – National-Level Poster',
      description: 'Futuristic promotional poster with deep magenta-to-purple gradient. Glowing particle effects with abstract geometric shapes. Energetic, tech-driven visual language optimized for digital promotion.',
      image: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/POSTER%20(1).png',
      tags: ['Hackathon', 'Poster']
    }
  ],

  // ─── REELS DATA ──────────────────────────────────────────
  reelFolders: [
    {
      id: 'urban_class',
      name: 'Urban Class Properties',
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80'
    },
    /* {
      id: 'royex',
      name: 'Royex Technologies',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
    }, */
    {
      id: 'new_category',
      name: 'Go Kite - UAE',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/go%20kite.png'
    },
    {
      id: 'brand',
      name: 'Mad Chef',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/Chef.jpg'
    },
    {
      id: 'ads',
      name: 'Varsha Lens',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/varsha.jpg'
    },
    {
      id: 'product',
      name: 'Anand-Aura',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/Anand.jpg'
    },
    {
      id: 'events',
      name: 'Appu Wayne',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/appu.jpg'
    },
    {
      id: 'motion',
      name: 'Sandra Lucy',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/sandra.jpg'
    },
    {
      id: 'experimental',
      name: 'Niveditha',
      thumbnail: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/images/thumnails/niveditha.jpg'
    }
  ],

  reels: {
    new_category: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Go%20kite/Trade%20Visa%202026?updatedAt=1771251629508', link: 'https://www.instagram.com/reel/DUvJb1VkY3Y/', label: 'Trade Visa 2026' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Go%20kite/Valentines%20day%202026?updatedAt=1771251520941/', link: 'https://www.instagram.com/reel/DUtXXe4kjTz/', label: 'Valentines Day 2026' }
    ],
    brand: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Senanguni-chamanthi.mp4', link: 'https://www.instagram.com/reel/DSALDvVCWUM/', label: 'Chennanguni Chammanthi' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Masala%20chakli.mp4', link: 'https://www.instagram.com/reel/DSPhzuQiQl0/', label: 'Masala Chakli' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Egg%20Chutney.mp4', link: 'https://www.instagram.com/reel/DSFTa8Kiffe/', label: 'Egg Chutney' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Kokarako%20Chammanthi.mp4', link: 'https://www.instagram.com/reel/DSkM6ieiUxH/', label: 'Kokarako Chammanthi' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Egg%20Raita.mp4', link: 'https://www.instagram.com/reel/DS97wtuCZ33/', label: 'Egg Raita' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/chef/Capsicum%20thovayal.mp4', link: 'https://www.instagram.com/reel/DTDA2aUCUpz/', label: 'Capsicum Thovayal' }
    ],
    ads: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Varsha/Daily%20Products.mp4', link: 'https://www.instagram.com/reel/DSC5YQZDScH/', label: 'Daily Products' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Varsha/Women%20Car%20Benefits.mp4', link: 'https://www.instagram.com/reel/DSIFROnjSGq/', label: 'Women Car Benefits' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Varsha/Online%20Loans.mp4', link: 'https://www.instagram.com/reel/DSNHzQkjBcQ/', label: 'Online Loans' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Varsha/McD%20&%20KFC.mp4', link: 'https://www.instagram.com/reel/DSSMb8Fj2MS/', label: 'McD & KFC' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Varsha/Car%20Insurance.mp4', link: 'https://www.instagram.com/reel/DS2KoxxDVg9/', label: 'Car Insurance' }
    ],
    product: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Anand/First%20Investment.mp4', link: 'https://www.instagram.com/reel/DR2KiF8CkJB/', label: 'First Investment' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Anand/Silver%20Investment.mp4', link: 'https://www.instagram.com/reel/DSFYKQyirel/', label: 'Silver Investment' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Anand/Midnight%20Chaos.mp4', link: 'https://www.instagram.com/reel/DSK1rw-itv5/', label: 'Midnight Chaos' }
    ],
    events: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Appu/3%20Haircut%20for%20Boys.mp4', link: 'https://www.instagram.com/reel/DScpRkIDfAl/', label: '3 Haircut for Boys' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Appu/Heroine%20Hair%20Story.mp4', link: 'https://www.instagram.com/reel/DShl6uhjYcd/', label: 'Heroine Hair Story' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Appu/Celebrity%20Cuts%202026.mp4', link: 'https://www.instagram.com/reel/DTAge0XDYvX/', label: 'Celebrity Cuts 2026' }
    ],
    motion: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Sandra/HK%20Vitals.mp4', link: 'https://www.instagram.com/reel/DSupv7lEeF-/', label: 'HK Vitals' }
    ],
    experimental: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/First%20time.mp4', link: 'https://www.instagram.com/reel/DRzqHpnj5kj/', label: 'First Time' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/PCOS.mp4', link: 'https://www.instagram.com/reel/DSFjhsIDx5n/', label: 'PCOS' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Period%20pain.mp4', link: 'https://www.instagram.com/reel/DSSgdGCjwbJ/', label: 'Period Pain' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Pregnancy.mp4', link: 'https://www.instagram.com/reel/DSaLtojjzYW/', label: 'Pregnancy' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Work%20from%20Home.mp4', link: 'https://www.instagram.com/reel/DSh2CfnE6E8/', label: 'Work from Home' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Arrange%20Marriage%20.mp4', link: 'https://www.instagram.com/reel/DSkaoKUDyst/', label: 'Arrange Marriage' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Menstrual%20Fears.mp4', link: 'https://www.instagram.com/reel/DSpZnDVj0Cm/', label: 'Menstrual Fears' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Pregnancy%20Myths.mp4', link: 'https://www.instagram.com/reel/DSujQ2PD-_Z/', label: 'Pregnancy Myths' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Health%20Signs.mp4', link: 'https://www.instagram.com/reel/DSzq1RYjwS2/', label: 'Health Signs' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/4%20Friends.mp4', link: 'https://www.instagram.com/reel/DS49MkDj9VK/', label: '4 Friends' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/AMH.mp4', link: 'https://www.instagram.com/reel/DS-INjaDxaU/', label: 'AMH' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Niveditha/Not%20Ready.mp4', link: 'https://www.instagram.com/reel/DTDY-mBD0wN/', label: 'Not Ready' }
    ],
    urban_class: [
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_01.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVgcNaFkm5N/', label: 'Urban Class Properties 01' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_02.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVjBGnCkrCx/', label: 'Urban Class Properties 02' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_03.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVoDrT-Et72/', label: 'Urban Class Properties 03' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_04.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVq52FziPtP/', label: 'Urban Class Properties 04' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_05.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVwB6b3iO3m/', label: 'Urban Class Properties 05' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_06.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV09hhuiH4z/', label: 'Urban Class Properties 06' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_07.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV6YVL4CKjh/', label: 'Urban Class Properties 07' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_08.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV82C00CLLm/', label: 'Urban Class Properties 08' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_09.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV_GYOqiCGF/', label: 'Urban Class Properties 09' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_10.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWB_tGfiM9Q/', label: 'Urban Class Properties 10' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_11.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWEkjigiC85/', label: 'Urban Class Properties 11' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_12.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWHJQZfCBhC/', label: 'Urban Class Properties 12' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_13.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWJ05wWCKEJ/', label: 'Urban Class Properties 13' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_14.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWMS3n9CIgg/', label: 'Urban Class Properties 14' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_15.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWO4JIoiG8o/', label: 'Urban Class Properties 15' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_16.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWRc0IriAxt/', label: 'Urban Class Properties 16' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_17.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWUBrMQCKfS/', label: 'Urban Class Properties 17' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_18.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWWqL38iC5k/', label: 'Urban Class Properties 18' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_19.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWZLUMPs9ZV/', label: 'Urban Class Properties 19' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_20.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWbp2-GCEXj/', label: 'Urban Class Properties 20' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_21.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWeUhIXCHHO/', label: 'Urban Class Properties 21' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_22.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWg6YPKCBjv/', label: 'Urban Class Properties 22' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_23.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWjAhAiCJkv/', label: 'Urban Class Properties 23' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_24.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWmDVQLMGwy/', label: 'Urban Class Properties 24' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_25.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWooKoqMCKQ/', label: 'Urban Class Properties 25' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_26.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWrM8onCPrO/', label: 'Urban Class Properties 26' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_27.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWty6NWiHLa/', label: 'Urban Class Properties 27' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_28.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWwWduaMpz5/', label: 'Urban Class Properties 28' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_29.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWy-z6HiEr9/', label: 'Urban Class Properties 29' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_30.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW4LJUmiFuy/', label: 'Urban Class Properties 30' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_31.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW6z_3ZjRR3/', label: 'Urban Class Properties 31' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_32.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW9QN0cshoH/', label: 'Urban Class Properties 32' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_33.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW_08sMMWUx/', label: 'Urban Class Properties 33' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_34.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXKF8YmiIj5/', label: 'Urban Class Properties 34' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_35.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXMxRVfiHvl/', label: 'Urban Class Properties 35' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_36.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXPSkCdCJAO/', label: 'Urban Class Properties 36' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_37.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXR2Vq1iA4_/', label: 'Urban Class Properties 37' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_38.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXXA6-PiOcU/', label: 'Urban Class Properties 38' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_39.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXZk6WIM5y9/', label: 'Urban Class Properties 39' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_40.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXcJtWViIXR/', label: 'Urban Class Properties 40' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_41.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXeufcUMtsg/', label: 'Urban Class Properties 41' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_42.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXhMcs1CNMN/', label: 'Urban Class Properties 42' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_43.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXjsKRzCOZ-/', label: 'Urban Class Properties 43' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_44.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXo60lBiKfO/', label: 'Urban Class Properties 44' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_45.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXrcVyTiEAV/', label: 'Urban Class Properties 45' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_46.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXzRSMMojZg/', label: 'Urban Class Properties 46' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_47.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DX4RctNIuMW/', label: 'Urban Class Properties 47' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_48.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DYckO_VSXXs/', label: 'Urban Class Properties 48' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_49.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DVyqO0cCBXY/', label: 'Urban Class Properties 49' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_50.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV3zaT5CHfW/', label: 'Urban Class Properties 50' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_51.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DV82nU1iAWx/', label: 'Urban Class Properties 51' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_52.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWEl3FKCBEB/', label: 'Urban Class Properties 52' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_53.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWMVn65CNO2/', label: 'Urban Class Properties 53' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_54.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWQ-FD-CHyP/', label: 'Urban Class Properties 54' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_55.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWWNc37iBoG/', label: 'Urban Class Properties 55' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_56.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWb2f7HDYRB/', label: 'Urban Class Properties 56' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_57.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWebSfxj4l6/', label: 'Urban Class Properties 57' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_58.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWlRi2woiDT/', label: 'Urban Class Properties 58' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_59.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWoryIECMkq/', label: 'Urban Class Properties 59' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_60.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWrR1U9CJXG/', label: 'Urban Class Properties 60' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_61.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWwdJ9TiOcU/', label: 'Urban Class Properties 61' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_62.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DWy_s0qCOhd/', label: 'Urban Class Properties 62' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_63.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW1f-fBCLsc/', label: 'Urban Class Properties 63' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_64.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW3R6a2j7DR/', label: 'Urban Class Properties 64' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_65.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW6wzCWCAhe/', label: 'Urban Class Properties 65' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_66.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW9Tok1IrKm/', label: 'Urban Class Properties 66' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_67.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DW_37TeCFiH/', label: 'Urban Class Properties 67' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_68.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXCaS3LiAKX/', label: 'Urban Class Properties 68' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_69.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXE-kptoCAd/', label: 'Urban Class Properties 69' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_70.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXMsmNUiOOm/', label: 'Urban Class Properties 70' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_71.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXcNLyNCDs6/', label: 'Urban Class Properties 71' },
      { src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/reels/Urban%20Class%20Properties/urban_class_properties_72.mp4?updatedAt=1781864211905', link: 'https://www.instagram.com/reel/DXpCIQ1CLOM/', label: 'Urban Class Properties 72' }
    ],
    // royex: []
  },

  // ─── FULL VIDEOS ─────────────────────────────────────────
  videos: [
    { title: 'Welcome Address – PEC Hacks', src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/video/Welcome%20Address%20PEC%20Hacks%20(1).mp4' },
    { title: 'Recap – PEC Hacks Season 1', src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/video/Recap%20PEC%20Hacks%20Season%201%20hori.mp4%20(1).mov' },
    { title: 'Final With Music', src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/video/Final%20With%20Music.mp4?updatedAt=1769070219231' },
    { title: 'Madasa – Event Recap', src: 'https://ik.imagekit.io/2gmny0aig/Portfolio/assets/video/madasa.mp4' }
  ],

  // ─── SOCIAL LINKS ────────────────────────────────────────
  social: {
    whatsapp: 'https://wa.me/971504123644',
    phone: '+971504123644',
    linkedin: 'https://linkedin.com/in/surya-noyal',
    instagram: 'https://instagram.com/',
    email: 'mailto:noyalsurya@gmail.com'
  }
};
