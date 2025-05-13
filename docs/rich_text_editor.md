# Cinemata Rich Text Editor Guide

This guide explains how to work with the new TinyMCE rich text editor. 

## Overview

![](../images/tinymce.png)

TinyMCE is a well-maintained rich text editor that allows users to easily create formatted content in a friendly interface. The current configuration of TinyMCE in Cinemata presents a familiar menu bar with frequently used tools placed in a toolbar below the menubar. 

## Usage

To get started, type your content in the editor area under the toolbar. TinyMCE will convert your content into sanitized HTML that will be rendered on the pages you're editing. 

### Toolbar Items

Several useful tools are enabled in the toolbar to help with editing. From left to right, they are
1. Undo/Redo - Allows you to undo an edit or redo a previous edit
2. Bold/Italicize - sets the selection to bold/italics
3. Block Selection - changes the HTML tag (h1, h2, etc...) used for the selected content
4. Alignment - allows changing the alignment of the content near the cursor
5. Bullet list/Numbered list - clicking this allows inserting a bulleted list (ul) or a numbered list (ol)
6. Clear formatting - Remove any styling from the selection. Note that clearing the formatting does not change the HTML tag of the content, but only things like italicization and bold face
7. Help - Shows some shortcuts that can be used in the editor

### Menu Items

The configured TinyMCE editor also contains a menu bar featuring some useful tools. Some of the most useful tools are:
- HTML Preview - Found in File -> Preview or View->Preview. Allows you to show the resulting rendered HTMl. Note that the preview shows only the HTML and not the css styles that will be applied to the content when rendering.
- Source Code - Found in View->Source code. Allows you to edit the raw html of the text.
- Show Blocks - Found in View->Show blocks. Lets you see the HTML tags being used when your content is rendered to HTML.
- Insert menu - You can insert a variety of media in your rich text without having to code the content in raw HTML. 
- Table menu - Allows you to insert an HTML table

### Differences between CKEditor and TinyMCE
- CKEditor contains more formatting styles by default. TinyMCE also contains all the important formatting styles (found in the Format menu), but CKEditor has more in its menu bar.
- CKEditor also contains more HTML tags in its toobar dropdown. TinyMCE also has most of the HTML tags that CKEditor has (found in the toolbar or in the menu bar)
- TinyMCE has an HTML Preview function, which can be found in the View menu.
- TinyMCE has different styles for its numbered and bullet list.
- TinyMCE has a Show Blocks function that visualizes the structure of the HTML
- TinyMCE allows you to easily insert dates (found in Insert->Date/time)
- TinyMCE makes it easy to insert links and html tables
- TinyMCE's Format menu has options for different font styles and font sizes
- TinyMCE has a tidy word count functionality found in the Tools menu
- TinyMCE contains a lot of keyboard shortcuts which can be found in the Help menu

## Configuration

The TinyMCE editor is easily configurable. The current configuration can be found in TINYMCE_DEFAULT_CONFIG of `cms/settings.py`. You may consult this ![link](https://django-tinymce.readthedocs.io/en/latest/installation.html#configuration) and the TinyMCE ![documentation](https://www.tiny.cloud/docs/tinymce/latest/) for configuration options. The configuration process usually involves looking at the TinyMCE documentation config options and copying them verbatim in the TINYMCE_DEFAULT_CONFIG variable. 