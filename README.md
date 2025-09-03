## CinemataCMS: An Enhanced MediaCMS-based Video Platform for Asia-Pacific Social Issue Films

[Cinemata](https://cinemata.org) is an open-source project that builds upon [MediaCMS](https://github.com/mediacms-io/mediacms), enhancing it with features specifically designed for showcasing social issue films from the Asia-Pacific region. Since its public release in 2021, Cinemata has developed numerous features that were previously exclusive to its platform and not available in the core MediaCMS. The project is managed by EngageMedia, an Asia-Pacific non-profit advocating for digital rights, open-technology and social issue films.

Our goal is to make these Cinemata-specific integrations and improvements to MediaCMS available to the public, enabling more organizations to maximize the potential of this powerful video content management system.

### Key features:
- [Core MediaCMS features](https://github.com/mediacms-io/mediacms)
- Cinemata-specific enhancements:
  - [Multi-Factor Authentication](https://github.com/EngageMedia-video/cinematacms/blob/main/docs/security/mfa_authentication.md)
  - Custom CSS and UI components for a unique, tailored look distinct from baseline MediaCMS
  - Featured video and playlists on the front page
  - Customised playlists and embedding options on the front page
  - Integration of [whisper.cpp](https://github.com/ggml-org/whisper.cpp) ASR model for English translation
  - Ability to upload, edit, and download .SRT files for subtitles or captions
  - Expanded user roles that include a Truster User, who has greater access to site features relating to publishing and the ASR model.

---
 
### Potential Use Cases for CinemataCMS
CinemataCMS can serve a wide range of organizations and initiatives that need to manage, showcase, and distribute video content with a focus on social impact:

- **Educational institutions** - Universities, film schools, and educational programs can use CinemataCMS for teaching references, student submissions, and creating accessible archives of instructional materials
- **Community archiving initiatives** - Cultural and community organisations working to preserve local stories and historical footage
- **Film festivals** - Both virtual and physical film festivals looking for platforms to showcase submissions and curated collections
- **Independent media organisations** - News outlets, documentary collectives, and citizen journalism projects requiring secure hosting for sensitive content
- **Human rights documentation** - NGOs and advocacy groups documenting human rights situations in sensitive contexts
- **Cultural heritage preservation** - Museums, libraries, and archives digitising and showcasing audiovisual cultural heritage
- **Environmental advocacy** - Organisations using video to document environmental issues and climate change impacts
- **Research institutions** - Academic and scientific organisations sharing visual research outputs and findings
- **Digital storytelling projects** - Initiatives promoting digital storytelling as a tool for empowerment and social change

The platform's emphasis on privacy, security, and community engagement makes it particularly suitable for projects prioritising ethical content management and user protection. 

### Screenshots

<p align="center">
    <img src="images/IMG_1934.jpeg" width="340">
    <img src="images/IMG_1935.jpeg" width="340">
    <img src="https://github.com/EngageMedia-video/cinemata/blob/main/images/Integration%20of%20Whisper%20ASR%20for%20English%20Translation.png" width="340">
    <img src="images/IMG_1931.jpeg" width="340">
</p>

### History

Cinemata's content originates from EngageMedia's previous video platform, which operated from 2006 to 2020 using the Plumi video content management system. By migrating this valuable archive to an improved MediaCMS-based platform, we're ensuring the preservation and continued accessibility of essential narratives from the region. Since its launch, the current Cinemata site has added more than 2,000 videos contributed by its active users, further enriching its collection of social issue films. Cinemata is co-developed by Markos Gogoulos of MediaCMS.

“Cinemata” comes from the combination of “cine”, which means “motion picture”, and “mata”, which means “eye” in several regional languages:

- In Bahasa Malaysia, Bahasa Indonesia, and Filipino, the word for “eye” is “mata”
- In Tetum (East Timor), the word for “eye” is “matan”
- In Vietnamese, the word for “eye” is “mắt”
- In Thai and Lao, the word for “eye” is “ta”

“Cinemata” represents our focus on highlighting Asia-Pacific perspectives and connecting issues, films, and filmmakers in the region.

##  🚀 Installation
The instructions have been tested on Ubuntu 22.04. Make sure no other services are running in the system, specifically no nginx/Postgresql, as the installation script will install them and replace any configs.

As root, clone the repository on /home/cinemata and run install.sh:

### For Beta Users (Stable)

```
# cd /home
# mkdir cinemata && cd cinemata
# git clone -b release/cinemata-2.0-beta https://github.com/EngageMedia-video/cinematacms.git cinematacms && cd cinematacms
# chmod +x install.sh
# ./install.sh
```
### For Development (Latest)
```
# cd /home
# mkdir cinemata && cd cinemata
# git clone https://github.com/EngageMedia-video/cinematacms cinematacms && cd cinematacms
# chmod +x install.sh
# ./install.sh
```
⚠️ Note: Main branch contains latest development code and may have unstable features.

This should take a few minutes with dependencies etc. Make sure you enter a valid domain when asked (eg staging.cinemata.org)

**Note**: For setting up the application locally on macOS (Ventura 13.0 and Sequoia 15.2), refer to [this guide](https://github.com/EngageMedia-video/cinematacms/blob/main/docs/setup/mac_setup.md) for more information.

**Check out [Index](docs/index.md)** for more information. 

## Contributors

Thanks to all the amazing people who have contributed to this project:

[Markos Gogoulos](https://github.com/mgogoulos)
[Yiannis Stergiou](https://github.com/styiannis)
[Anna Helme](https://github.com/ahelme)
[King Catoy](https://github.com/Kingcatz)
[Ashraf Haque](https://github.com/securenetizen)
[Mico Balina](https://github.com/Micokoko)
[Khairunnisa Isma Hanifah](https://github.com/KhairunnisaIsma)
[Jay Cruz](https://github.com/jmcruz14) 
[Adryan Eka Vandra](https://github.com/adryanev)
[John Henry Galino](https://github.com/jhgalino)

Want to contribute? Check out our [contribution guidelines](docs/CONTRIBUTING.md).
