---
templateKey: blog-post
author: Dick Wyn Yong
title: My frustration with Microsoft services
subtitle: Not as advertised
date: 2019-12-29T01:46:29.791Z
description: >-
  A few issues that I have encountered while using applications and/or services from Microsoft
featuredPost: false
featuredImage: ../../static/images/office.com-screenshot-apps.png
tags:
  - microsoft
  - setup
  - rant
---

A few years back (circa 2013) I made the decision to invest into the Microsoft ecosystem. That meant exclusively using Microsoft services as my day to day productivity tools. Back then, it was simply just moving my usage from Gmail to Outlook and Google Drive + Dropbox to OneDrive. I made that decision on the fact that Microsoft was promising a seamless experience with all their applications and operating systems (Windows 8, Microsoft Office, Windows Phone).

As the years go by, the 'ecosystem' was improved with Windows 10 and mobile applications for Microsoft services being built for both Android and iOS after Windows Phone / Windows 10 Mobile went defunct. In the same period, I started an Office 365 subscription which granted 1TB of cloud storage on OneDrive. It's still by far the largest 'free' cloud storage I have on any cloud provider. I had airquotes on free as the OneDrive storage isn't per-say free but it is essentially free given the Office 365 subscription which I primarily pay for using the Microsoft Office apps (Word, Excel, Outlook).

I think what sold me on with the Microsoft ecosystem is the fluidity when it comes to how data flows from one device to another. Whether it be using an Android phone or MacOS computer, I'll be able to have applications that work great. Compared to Apple and Google, Microsoft is more platform agnostic where they take time to build applications for not just their platforms but competitors one also (Android, iOS, macOS). For the most part, they have nailed it. But there's just been one caveat. That is, it doesn't always work.

These small hiccups in the overall experience is what led me to write up this entry. I'm the kind of person that doesn't religiously use productivity apps. Sure, I have OneNote and Microsoft To Do on my devices but I tend to have a phase where I use it a lot and another where I don't use it at all. Which is why I am able to tolerate some of the minor shortcomings that comes with some of the Microsoft productivity apps.

Let me unpack my thoughts in the following sections below:

## Outlook.com

Unlike what I mentioned earlier, Outlook is one of the apps/services from Microsoft that I interact with on a daily basis. Heck, it's even the first app I open on my phone during a weekday. A lot of people use @gmail.com as their primary email but I chose to use @outlook.com email because back when they transitioned from Hotmail and Outlook, there was the opportunity to reset my email address name to my actual name without number or punctuations. I have to say, I really like my dickwyn@outlook.com email address, it looks great on my resume and business cards but there's two things about it that I absolutely hate.

https://twitter.com/dickwyn/status/1191477590323650560

The first being spam / phishing / junk emails. If you're following me on twitter ([@dickwyn](https://twitter.com/dickwyn)), you might've seen my thread about how junk emails routinely gets indexed into my Focused inbox. For those not familiar with how the Outlook.com inbox works, there essentially two inboxes. One called 'focused' and one normal inbox. The focused inbox uses (I assume), machine learning to figure out which emails are important. I would believe that this is similar to the yellow priority tag @gmail.com accounts.

For the longest time, well before I started that Twitter thead above, emails that are clearly spam are being put in my Focused inbox. If the emails made it to my normal inbox, I would be ok about it but the fact that it made it to the focused inbox makes me wonder why. To add on that, on my phone, I only have push notifications active for emails in my focused inbox and naturally when these junk emails gets filtered into the focused inbox, it shows up as a push notification. What I usually do when that happens is to manually mark it as junk. But that doesn't solve my problem at all, marking the email as junk doesn't help.

Whilst, I primarily use my @outlook.com email, I do actively use my @gmail.com email for some subscriptions and accounts. I have never experienced such bad spam on my @gmail.com email, it indexes spam very well. To reiterate this issue, I'm not saying that the Microsoft's spam protection is bad, it does index incoming emails to the junk folder but I feel there's something wrong about the algorithm / model that they're using in their spam filter.

The next small issue I have is a rather small one. To some people, it might be a non issue but for me, it's kind of an eyesore. I'm referring to two folders on my @outlook.com email named 'Conversation History' and 'RSS Subscriptions' that cannot be deleted. I never created nor opted to turn on any of these folders at any point. These two folders are empty and every now and then, I try googling some solutions on removing them but it always ends up unsuccessful.

## Syncing

The issue with syncing on Microsoft applications / services has always been there. Even when I started to make the switch to using Microsoft services a few years back. One great example I have is with OneDrive syncing. The sync feature on OneDrive works but the speed at which it syncs from one device to another is not great. This has been improved over the years but every now and then it does bog down for no particular reason. For example, if I added a file to my OneDrive folder on Windows 10, I have to wait several minutes before I'm able to refresh and see if on the OneDrive app on my Android phone.

Mind you that this is not the problem with uploading the file. The file has already been uploaded to the cloud and I'm able to see it on onedrive.live.com. There seems to be some delay with the OneDrive client on the Android app which doesn't pick up items instantaneously. The same thing goes for the other way around when I'm upload a file from my Android phone and try to access it on my Windows 10 computer. In a vacuum, this syncing experience is not bad at all but when I compared it to how fast Dropbox does syncing, that's when I see it being problematic.

This next bit on syncing is going to be a little messy as I'm trying to connect all the dots whilst writing this entry.

<figure>
  <img src="/images/microsoft-outlook-sidebar-screenshot-mac.png" alt="Microsoft Outlook Mac sidebar screenshot">
  <figcaption>A screenshot of the Mac version of Microsoft Outlook. Highlighted on the bottom left is the sidebar with the Notes and Tasks tab.</figcaption>
</figure>

I'm a big fan of the Microsoft Outlook application for Windows and Mac. I am a bit salty that rules are not on the Mac version of Outlook but the overall experience is great. Emails, syncing and calendar features are great. What's not so great is the somewhat confusing, slow and undocumented syncing nature of the Tasks and Notes tab on Outlook.

Earlier this year, I noticed the Tasks Notes tab on the sidebar of Outlook and decided to try and use it. Soon after that, I realized that these two tabs are interconnected with OneNote, Microsoft To Do and the Sticky Notes app on Windows 10.

Let's start with the connection with how OneNote, Sticky Notes and Microsoft Outlook are at the time of writing.

Sticky Notes:

- Syncs to the Sticky Notes tab on the Android/iOS OneNote app
- Syncs to the Notes tab on the Mac/Windows Microsoft Outlook app
- Syncs to the Microsoft Sticky Notes app on Windows 10
- Does not sync to the Mac/Windows OneNote app
- Does not sync to outlook.com, office.com or any Microsoft web application

The big gripe I have here is how confusing the sync is. It appears in weird places. It's good that I'm able to see my notes on the Microsoft Outlook application on Mac/Windows but it's confusing why the sticky notes appear on the OneNote app for Android/iOS but not on the OneNote app for Mac/Windows. Adding to all that, the syncing of sticky notes on the Notes tab for Microsoft Outlook on Mac/Windows is just one way. Meaning that I can see the sticky note that i created but I am unable to edit it on the Notes tab and have it synced to other places.

This kinda feels like a lot of different ideas are being executed all at once. I think some teams at Microsoft think the notes should exist as a standalone app like on the Windows 10 app but then there is the problem of viability whether people want to have a dedicated app or want to sync to another device so they slot it in to other places like on the OneNote app and in the Microsoft Outlook app.

<figure>
  <img src="/images/microsoft-outlook-mac-notes-tab.png" alt="Microsoft Outlook Mac sidebar screenshot">
  <figcaption>The sticky note that was synced to the Microsoft Outlook notes tab</figcaption>
</figure>

<figure>
  <img src="/images/microsoft-onenote-android-sticky-notes-tab.png" alt="Microsoft Outlook Mac sidebar screenshot">
  <figcaption>The sticky note I created on the OneNote android app that could not sync with the changes made from the Microsoft Outlook notes tab</figcaption>
</figure>

Next up is how Microsoft To Do syncs data with Microsoft Outlook. This issue I'm facing here is far simpler than how the Sticky Notes date is being synced. The problem is that on the Microsoft Outlook apps (both mobile and desktop), when I flag and email, it shows up as a task in the Tasks tab on the Microsoft Outlook app on Mac/Windows but it does not show up on the Microsoft To Do applications.

I think this is yet another clashing of idea / feature that is happening. These two problem are likely due to Microsoft migrating new features into existing ones and not decisively axing one of them. Yes, the subset of users that might be facing this exact issue is low given that not everyone is using a combination of the apps that I'm using. But, I'm still frustrated that it is like that. It feels very much like a beta experience without explicitly being a beta feature.

## Dark mode

This next bit is a short one and is not unique with just Microsoft. That is the rollout of dark mode and new interfaces to the plethora of applications (whether it be native or web based) that Microsoft has. One good example is the OneDrive web application which awfully bright in the sea of dark more enabled web applications that Microsoft has. I don't know why it is taking them so long to implement it, both the outlook and calendar web applications have implemented the dark mode for quite a while now.

## To stay or to leave

I hope someone at Microsoft reads this and understands what I am feeling as an end user. All the points I made in this entry are valid usability concerns except for the last one which is more of a rant than an actual concern. I will continue to use my combination of Microsoft services / applications moving into 2020 despite the minor shortcomings. But I am on the lookout for new productivity apps that are not made by Microsoft or any other big corporation.

Looking beyond some of the issues that I raised in this entry, as a software developer myself, I would like to give kudos to the teams over at Redmond for creating great mobile and desktop applications as well as putting in the effort to migrate features to different applications. I just wish there was more attention to details to the smaller things before a feature / product is shipped.
