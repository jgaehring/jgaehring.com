---
title: "farmOS Client"
path: "/farmos-client"
date: "2018-10-06"
rank: 1
cover: "./screenshot.png"
thumb: "./thumbnail.png"
description: "An extensible client library for farmOS, with mobile & offline capabilities"
stack:
  - "Vue.js"
  - "Apache Cordova"
link: "https://farmos.org/development/client/"
github: "https://github.com/farmOS/farmOS-native"
---

## Features
[farmOS](https://farmOS.org) is a web-based application for farm management, planning and record keeping. While farmOS Core can run on any computer, phone or other device with a web-browser, farmOS Client is intended to provide more mobile-friendly, lightweight applications that farmers can use from anywhere on their farm. This way, they can update their farmOS records even if they're out of range of wifi or a cellular signal.

So far, the main use of the client library is to build native applications that run on iOS and Android devices. They should be available on app stores by the end of 2018 and are currently in alpha testing. As with farmOS Core, the client library and native applications are 100% open source.

The first features developed for the client library were commissioned by [Paicines Ranch](https://paicinesranch.com) in California. The ranch was already using farmOS to keep track of the grazing conditions for their livestock, but wanted to be able to take observations of the forage quality with their phones, while surveying the many paddocks spread out on their 7000 acres of pasture. Although farmOS could easily be loaded in their phone's browser, the moment they left the wifi range of their farm office, they could no longer make updates to farmOS, because that process was reliant on a connection to their farmOS server. The native application solves this by having its own persistent storage, which can be synced with the farmOS server at a later time when connectivity is restored. Farmers can also take pictures with their phones and easily include them with those observations, because the native app can access the phone's hardware directly.

While these features are only available in the native apps at the moment, one benefit of the client's architecture is that it can eventually be used to extend the functionality of the web-based farmOS Core, as well. The goal is to eventually make these offline capabilities a feature that comes with farmOS Core, straight out of the box. This is because the client library, while capable of running on native devices, is actually written with the language of the web: JavaScript. By using a common language that can run anywhere, efforts to develop the native application can be recycled for use in farmOS Core, and vice versa. And that is the real strength of the client, and why it is not merely an application, but a whole library of application components for extending functionality to multiple platforms.
