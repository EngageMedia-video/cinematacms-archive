## CinemataCMS: An Enhanced MediaCMS-based Video Platform for Asia-Pacific Social Issue Films

[Cinemata](https://cinemata.org) is an open-source project that builds upon [MediaCMS](https://github.com/mediacms-io/mediacms), enhancing it with features specifically designed for showcasing social issue films from the Asia-Pacific region. Since its public release in 2021, Cinemata has developed numerous features that were previously exclusive to its platform and not available in the core MediaCMS. The project is managed by EngageMedia, an Asia-Pacific non-profit advocating for digital rights, open-technology and social issue films.

Our goal is to make these Cinemata-specific integrations and improvements to MediaCMS available to the public, enabling more organizations to maximize the potential of this powerful video content management system.

### Key features:
- [Core MediaCMS features](https://github.com/mediacms-io/mediacms)
- Cinemata-specific enhancements:
  - [Multi-Factor Authentication](https://github.com/EngageMedia-video/cinematacms/blob/main/docs/security/mfa_authentication.md)
  - X-accel redirect implementation for greater security and optimisation
  - Custom CSS and UI components for a unique, tailored look distinct from baseline MediaCMS
  - Featured video and playlists on the front page
  - Customised playlists and embedding options on the front page
  - Integration of [whisper.cpp](https://github.com/ggml-org/whisper.cpp) ASR model for English translation
  - Ability to upload, edit, and download .SRT files for subtitles or captions
  - Expanded user roles that include a Truster User, who has greater access to site features relating to publishing and the ASR model.

---
 
## Tools for Community Archiving & Human Rights Documentation

CinemataCMS could provide a platform for organizations working to document, preserve, and seek justice for human rights violations through crowdsourced video evidence. 

### Areas for Enhancement Intended for Human Rights Work

**Evidence Management & Legal Workflows**
- **Metadata extraction**: Automatic extraction of location, date, time, and device information from uploaded media to establish provenance
- **Chain of custody tracking**: Contributor, owner, and consent management with verification workflows
- **Content categorization**: Organized tagging system for violence types, source platforms, and incident classification
- **Geolocation mapping**: Interactive location pinning for incident documentation and pattern analysis

**Community-Driven Documentation**
- **Crowdsourced submissions**: Support for both direct witness uploads and trusted network contributions
- **Multi-language interface**: Bilingual forms and metadata collection to serve diverse communities
- **Content verification**: Contributor role management with verification person assignments
- **Consent frameworks**: Built-in consent collection for legal sharing and distribution

**Technical Capabilities for Investigation Support**
- **Content analysis tools**: AI-powered transcription and content filtering capabilities
- **Secure archival**: Privacy-focused hosting with controlled access for sensitive documentation
- **Export functionality**: Structured data export for legal proceedings and formal investigations

### If developed, CinemataCMS-Archive Could be Ideal for Organizations Working On

- **Human rights documentation** - NGOs and advocacy groups requiring secure, systematic evidence collection
- **Transitional justice initiatives** - Truth commissions and accountability mechanisms
- **Community archiving** - Grassroots movements preserving critical historical moments  
- **Legal advocacy** - Organizations building cases for formal justice proceedings
- **Crisis response** - Rapid deployment for documenting emerging human rights situations

*With these proposed enhancements, CinemataCMS could transform community-generated content into structured, legally-relevant documentation while prioritizing contributor safety and consent - making it an invaluable tool for organizations seeking justice and accountability.*

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
# git clone -b v2.0.1 https://github.com/EngageMedia-video/cinematacms-archive.git cinematacms && cd cinematacms
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
