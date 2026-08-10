---
title: "Ric OS: The Private Operating Layer for a User-Owned Relationship With AI"
date: "2026-08-10"
tags:
  - Ric OS
  - Local AI
  - Privacy
  - User-Owned Data
  - Personal Computing
  - AI Relationships
draft: false
summary: "Ric OS is the private operating layer that allows Ric Browser, Ric Add-on, Ric applications, local models, devices, and cloud services to work together without turning the user into a corporate data product."
---

# Ric OS

## The Private Operating Layer for a User-Owned Relationship With AI

Ric OS is the operating-system layer that allows the broader Ric ecosystem—Ric Browser, Ric Add-on, Ric applications, local models, devices, and cloud services—to work together without turning the user into a corporate data product.

The central idea is simple:

> **Ric does not build a hidden profile about the user. The user builds and owns a visible relationship with Ric.**

That distinction is more than branding. It should determine the architecture, permissions, user interface, business model, and legal commitments of the entire Ric ecosystem.

Traditional platforms collect behavioral data inside company-controlled systems. The user may be able to adjust a handful of preferences, but usually cannot see the complete profile, understand how conclusions were reached, remove individual inferences, or carry the profile to another service.

Ric reverses that arrangement.

The relationship lives primarily on the user’s hardware. Ric can learn deeply because the information does not need to become corporate property. The user can examine the relationship, speak to it, correct it, constrain it, export it, encrypt it, transfer it, pause it, or erase it.

---

# The Ric Ecosystem

## 1. Ric OS

Ric OS is the trusted local foundation.

It manages:

- The encrypted relationship database
- Local AI models
- User preferences and boundaries
- Identity and cryptographic keys
- Permissions for applications
- Browser activity authorized by the user
- Memory retention policies
- Private recommendation processing
- Secure synchronization between the user’s devices
- Communication with optional Ric cloud services
- Export, backup, recovery, and deletion

Ric OS does not necessarily need to begin as a complete Linux, Windows, macOS, Android, or iOS replacement.

The practical first version can be a **local system service** running on top of existing operating systems. It could expose a secure local API to approved Ric applications.

```text
┌───────────────────────────────────────────────┐
│                   User                        │
├───────────────────────────────────────────────┤
│ Ric Browser │ Ric UI │ Ric Apps │ Extensions  │
├───────────────────────────────────────────────┤
│                Ric Local API                  │
├───────────────────────────────────────────────┤
│ Relationship Engine │ Policy Engine │ AI Core │
├───────────────────────────────────────────────┤
│ Encrypted Ric Vault │ Keys │ Local Event Log  │
├───────────────────────────────────────────────┤
│ Windows / Linux / macOS / Android / Hardware  │
└───────────────────────────────────────────────┘
```

Over time, Ric OS could become a full operating-system distribution or a specialized secure environment. But beginning as a cross-platform local service is the more achievable engineering path.

---

## 2. Ric Add-on

Ric Add-on connects Ric to the user’s existing operating system and applications.

It can integrate with:

- Web browsers
- File systems
- Calendars
- Notes
- Email
- Media players
- Accessibility tools
- Development environments
- Local applications
- Connected devices

Every integration should be permission-based.

```text
Ric Browser requests:
✓ Read current webpage
✓ Save website preference
✓ Store browsing topic locally
✗ Upload raw browsing history
✗ Access unrelated files
```

The user should be able to grant permissions:

- Once
- For the current session
- For a specific website
- For a defined period
- Permanently
- Never

Ric Add-on should not silently inherit access to everything on the operating system. It should function more like a carefully permissioned bridge.

---

## 3. Ric Browser

Ric Browser uses the relationship stored in Ric OS to personalize discovery locally.

The browser may retrieve a public list of candidate results from the global Ric index. However, the final ranking can occur on the user’s device.

```text
Global Ric:
"Here are 100 potentially relevant pages."

Local Ric:
"Based on the user's private relationship,
these are the 12 most appropriate pages, in this order."
```

This architecture allows Ric Browser to produce highly personalized recommendations without sending the user’s complete relationship profile to QCS.

That is the core technical advantage.

---

## 4. Global Ric

Global Ric is the public, cloud-based layer.

It can manage:

- Public web indexing
- Search retrieval
- Website metadata
- Domain reputation
- Public comments
- Community conversations
- Spam detection
- Creator verification
- Website feedback
- Public recommendation signals
- Connections between consenting users
- Shared topic and interest spaces

Global Ric should not possess the user’s raw private relationship.

Instead, the local system can request candidates or send limited privacy-protected signals.

---

# Profile Versus Relationship

Social platforms already create detailed models of users. They may infer:

- Interests
- Political preferences
- Purchasing behavior
- Emotional state
- Relationships
- Location patterns
- Health concerns
- Financial circumstances
- Addictions
- Vulnerabilities
- Likelihood of clicking or purchasing

The fundamental problem is not merely that these models exist.

The deeper problem is that they are usually:

- Hidden from the user
- Owned by the platform
- Designed for platform objectives
- Difficult to correct
- Difficult to delete
- Used across contexts
- Shared with advertisers or partners
- Built without meaningful negotiation

A Ric relationship would be different because the user participates in its formation.

The user could ask:

> “What do you currently believe I am interested in?”

> “Why have you been recommending this kind of content?”

> “Remove the assumption that I am shopping for a new car.”

> “I was researching addiction for a family member. Do not treat that as my personal identity.”

> “I enjoyed this documentary, but I do not want more violent content.”

> “I am trying to stop using drugs. Prioritize recovery resources and avoid content that may trigger me.”

> “Do not use my health-related searches for social matching.”

This makes the relationship **negotiable**, rather than merely observable.

---

# The Relationship Model

The Ric relationship should not be one giant opaque AI embedding. It should have visible, structured components.

```text
Ric Relationship
├── Interests
│   ├── Software engineering
│   ├── Quantum computing
│   ├── Sports design
│   └── Sustainable architecture
│
├── Current Goals
│   ├── Build Ric Browser
│   ├── Improve physical health
│   └── Reduce distracting content
│
├── Content Preferences
│   ├── Technical depth: High
│   ├── Visual explanations: Preferred
│   ├── Primary sources: Strong preference
│   └── Advertising tolerance: Very low
│
├── Boundaries
│   ├── Do not recommend gambling
│   ├── Do not infer medical diagnoses
│   ├── Do not use private notes for matching
│   └── Ask before sharing location
│
├── Trusted Sources
│   ├── Selected documentation sites
│   ├── Specific creators
│   └── Academic publishers
│
├── Disfavored Sources
│   ├── Clickbait domains
│   ├── Content farms
│   └── Sites with intrusive advertising
│
├── Sensitive Topics
│   ├── Private health research
│   ├── Financial information
│   └── Personal relationships
│
└── Relationship History
    ├── User corrections
    ├── Recommendation outcomes
    ├── Preference changes
    └── Important conversations
```

Each category should include:

- Its origin
- The date it was created
- Confidence level
- Whether it was explicitly stated or inferred
- Which applications may use it
- Whether it may leave the device
- When it expires
- Whether it affects recommendations
- A delete or modify control

```json
{
  "concept": "prefers long-form technical explanations",
  "source": "explicit_user_statement",
  "confidence": 0.98,
  "createdAt": "2026-08-10T12:35:00-04:00",
  "expiresAt": null,
  "sensitivity": "low",
  "allowedUses": [
    "local_search_ranking",
    "response_formatting"
  ],
  "cloudSharing": "never",
  "userEditable": true
}
```

This is far more trustworthy than allowing an AI to maintain an invisible, unstructured psychological model.

---

# The Relationship Interface

The user needs a beautiful interface through which the relationship becomes understandable.

## Relationship Garden

This is the visual, human-centered view.

Topics could appear as living branches, constellations, geometric systems, or connected spaces. The user can see which interests are growing, fading, or becoming more important.

Examples:

- Software engineering is a strong, stable branch.
- Travel planning is temporarily active.
- Addiction recovery is marked as protected.
- Sports innovation is growing.
- A previously strong interest is fading because the user stopped engaging with it.

The interface should communicate meaning without suggesting that every human characteristic can be reduced to a score.

## Relationship Ledger

This is the precise technical view.

It shows:

- What Ric remembers
- Why Ric remembers it
- When the information was learned
- Which application created it
- Who or what may access it
- How it affects recommendations
- Whether it has ever left the device

This ledger is essential for accountability.

## Recommendation Simulator

The user could test how the relationship changes results.

```text
Search: "best programming language for backend services"

Current relationship:
1. Go
2. Rust
3. TypeScript
4. Python

Neutral relationship:
1. Java
2. Python
3. Go
4. C#

Startup-focused relationship:
1. TypeScript
2. Python
3. Go
4. Ruby
```

This allows the user to see how personalization influences information discovery.

## Memory Conversation

The user can communicate naturally with the relationship system:

> “Show me what you learned this week.”

> “Why do you think I like this?”

> “Forget everything associated with that project.”

> “Do not let entertainment searches affect professional recommendations.”

> “Treat this interest as temporary.”

> “Do not connect me with other users based on this topic.”

> “Keep this memory only on this computer.”

Ric then translates the conversation into explicit policy changes that the user can review.

The important design rule is:

> Natural-language convenience should not replace visible confirmation for consequential privacy changes.

---

# Addiction and User-Controlled Recommendation Boundaries

A conventional recommendation system sees repeated attention and concludes:

> “The user engages with drug-related content. Show more.”

Ric should understand that engagement does not always equal desire.

The user may be:

- Trying to recover
- Researching for someone else
- Studying public health
- Investigating a story
- Trying to avoid triggers
- Looking for treatment

Ric can allow the user to declare a goal:

```text
Goal:
Support substance-use recovery

Actions:
✓ Reduce triggering content
✓ Prioritize clinical and recovery resources
✓ Avoid recreational drug recommendations
✓ Detect possible relapse-oriented search patterns locally
✓ Offer a pause before opening known triggering pages
✓ Keep this goal entirely local
✗ Do not notify other people automatically
✗ Do not use this goal for social matching
```

The system must be careful. Ric should not act as an unlicensed medical authority, secretly diagnose the user, or prevent the user from accessing lawful information.

Instead, it can respect user-defined boundaries and support deliberate behavior.

This same structure could help with:

- Gambling
- Compulsive shopping
- Doomscrolling
- Eating-disorder triggers
- Pornography
- Self-harm content
- Political outrage cycles
- Sleep disruption
- Social-media overuse

The control belongs to the user.

---

# Portable Relationship Storage

The user should be able to carry the relationship between computers.

However, storing the relationship directly on a normal hard drive without additional protection would be dangerous. The relationship may contain some of the most sensitive information a person possesses.

A portable Ric relationship should use an encrypted vault.

Possible forms include:

- Encrypted external SSD
- Encrypted USB security device
- User-controlled home server
- Hardware security module
- Secure enclave-backed local storage
- Encrypted mobile-device vault
- Recovery package stored offline

```text
ric-relationship/
├── manifest.json
├── relationship.db.enc
├── memories.db.enc
├── preferences.json.enc
├── embeddings/
│   └── local-vectors.enc
├── policies.json.enc
├── device-authorizations.json.enc
├── model-adapters/
└── signatures/
```

The encryption key should not be stored beside the vault in plaintext.

A safer recovery model could combine:

- User passphrase
- Device-bound key
- Recovery key
- Optional trusted-device approval

For example, any two of the following could unlock the relationship:

1. User passphrase
2. Recovery key
3. Previously authorized Ric device

This provides portability without making one stolen drive enough to expose the user.

---

# The Ric Passport

A useful concept is a **Ric Passport**.

The passport would not contain the entire relationship. It would contain:

- The user’s public Ric identity
- Cryptographic public keys
- Approved public interests
- Community memberships
- Optional reputation credentials
- User-controlled contact information
- Device authorization records
- Proof that certain claims were verified
- Permissions for social discovery

The private relationship remains inside the Ric Vault.

```text
Ric Passport = What the user chooses to present

Ric Vault = What Ric privately knows with the user
```

The user might publicly share:

- “Interested in Go programming”
- “Open to collaborating on quantum-safe systems”
- “Located near Orlando”
- “Member of a verified developer community”

But keep private:

- Detailed browsing history
- Addiction-recovery goals
- Health searches
- Personal financial concerns
- Private relationships
- Sensitive political research

---

# Private Matching Between Ric Users

Connecting like-minded users is powerful, but this is also where privacy can fail.

It is not enough to simply remove names and call profiles anonymous. Detailed behavioral profiles can often be reidentified by combining interests, locations, timing, and other signals.

Therefore, Ric should not upload a complete “anonymous profile.”

A safer process would look like this:

```text
1. Global Ric publishes a public community or matching opportunity.

2. Local Ric evaluates compatibility privately on the user’s device.

3. Local Ric tells the user:
   "This community may be relevant to you."

4. The user decides whether to reveal an interest or initiate contact.

5. Only the explicitly approved information is shared.
```

For direct user-to-user recommendations, the system could use privacy-preserving interest tokens rather than complete profiles.

```text
User A wants:
"People near Orlando interested in Go, local networking,
and privacy-preserving mobile applications."

Local Ric generates limited matching tokens.

Global Ric finds possible candidates without receiving
User A's complete relationship history.

Both users receive an invitation.

No identity is revealed unless both approve.
```

More advanced versions could explore:

- Private set intersection
- Secure multiparty computation
- Oblivious pseudorandom functions
- Zero-knowledge credentials
- Differential privacy
- Rotating pseudonymous identifiers
- Federated recommendation learning

These technologies can reduce exposure, but none should be marketed as magical anonymity. The system needs a clear threat model and independent security review.

---

# Local-First Recommendation Architecture

A strong Ric Browser request flow could be:

```text
User enters query
      │
      ▼
Local Ric interprets private context
      │
      ├── Sensitive query?
      │      └── Apply stricter local-only policy
      │
      ▼
Generate minimal search request
      │
      ▼
Global Ric retrieves candidate websites
      │
      ▼
Candidates return without personalized ranking
      │
      ▼
Local Ric ranks candidates using private relationship
      │
      ▼
User sees personalized discovery deck
      │
      ▼
Feedback updates local relationship
      │
      └── Optional privacy-protected aggregate signal
             sent only with user-approved policy
```

For highly sensitive queries, Ric could use stronger privacy modes:

- No cloud account
- No query history
- Temporary network identity
- Search proxy
- Local-only result ranking
- No social recommendations
- No analytics
- Automatic local expiration

---

# Relationship Permissions

Each piece of information should have a policy.

## Storage

- Session only
- This device only
- User’s authorized devices
- Encrypted personal cloud
- Public

## Purpose

- Search ranking
- Content filtering
- Response personalization
- Social matching
- Accessibility
- Safety support
- Application automation

## Sensitivity

- Public
- Personal
- Sensitive
- Highly sensitive
- Never share

## Retention

- Until session ends
- One day
- Thirty days
- Until project completion
- Indefinite
- User-defined date

```json
{
  "memory": "user is researching addiction recovery",
  "storage": "this_device_only",
  "purposes": [
    "content_filtering",
    "recovery_support"
  ],
  "prohibitedPurposes": [
    "advertising",
    "social_matching",
    "insurance",
    "employment"
  ],
  "sensitivity": "highly_sensitive",
  "retention": "30_days"
}
```

---

# Ric Applications Must Ask the Relationship, Not Read It

Third-party Ric applications should not receive the complete relationship database.

Bad architecture:

```text
Third-party app downloads the user's complete Ric profile.
```

Better architecture:

```text
App asks:
"Does the user prefer dark mode?"

Ric OS responds:
"Yes."

App asks:
"May I personalize learning difficulty?"

Ric OS asks the user for permission.

App never receives unrelated browsing, health,
relationship, or financial data.
```

Example local API:

```http
POST /v1/relationship/query
Authorization: Ric-Capability <scoped-token>
Content-Type: application/json

{
  "purpose": "content_formatting",
  "claims": [
    "preferred_explanation_depth",
    "preferred_language"
  ]
}
```

Response:

```json
{
  "granted": true,
  "values": {
    "preferred_explanation_depth": "advanced",
    "preferred_language": "en-US"
  },
  "expiresAt": "2026-08-10T18:00:00-04:00"
}
```

The application receives only what it needs.

---

# Proposed Technical Components

## Ric Core Service

A local daemon written in Go or Rust that manages:

- Authentication
- Inter-process communication
- Encryption
- Relationship records
- Permissions
- Event logging
- Application registration
- Synchronization
- Local inference requests

Given the QCS stack, Go would be a strong choice for the orchestration layer because it provides:

- Good cross-platform support
- Simple concurrency
- Strong networking libraries
- Small deployable binaries
- Predictable operational behavior
- Clean service architecture

Rust may be preferable for especially sensitive cryptographic or low-level memory-safe components.

```text
Go:
- Local daemon
- API gateway
- Sync orchestration
- Plugin management
- Application lifecycle

Rust:
- Cryptographic vault
- Secure parsers
- Key handling
- High-risk native components

TypeScript / Next.js:
- Relationship dashboard
- Browser UI
- Developer portal
- Community interfaces

Local AI runtime:
- llama.cpp, MLX, ONNX Runtime, WebGPU,
  or platform-specific inference backends
```

## Ric Vault

Encrypted local database containing:

- Structured relationship records
- Conversation memories
- User policies
- Local embeddings
- Device records
- Consent receipts
- Recommendation history
- Audit logs

Possible implementation:

- SQLCipher for relational data
- Encrypted append-only event log
- Local vector index
- OS keystore integration
- Envelope encryption for backups

## Relationship Engine

This component converts behavior and explicit statements into proposed relationship updates.

Sensitive inferences should not be silently committed.

```text
Observed:
User repeatedly searches for sleep problems.

Unsafe conclusion:
"User has insomnia."

Safer proposed interpretation:
"Sleep-related information is currently relevant."

Ric asks:
"Should I treat better sleep as one of your current goals?"
```

A reasonable evidence order is:

1. Explicit user instruction
2. User-confirmed inference
3. Repeated behavior
4. Temporary contextual observation
5. Global statistical prediction

An explicit user correction should override lower-level signals.

## Policy Engine

The policy engine decides:

- Which application may access information
- Whether information may leave the device
- Which purpose is allowed
- Whether user confirmation is required
- Whether the information has expired
- Whether a query is considered sensitive
- Whether social matching is permitted

This should be deterministic wherever possible. Privacy should not depend entirely on an LLM making a judgment.

## Local AI Runtime

The local AI handles:

- Personal preference interpretation
- Private ranking
- Memory retrieval
- Relationship conversations
- Sensitive content policies
- Local summaries
- Offline assistance

Larger cloud models can be used when requested, but Ric OS should redact or minimize data before sending it.

```text
Processed locally:
✓ Browsing preference
✓ Relationship memory
✓ Sensitive content filter

Sent to cloud:
✓ Search phrase
✗ Full browsing history
✗ Private relationship graph
✗ Local notes
```

---

# The Ric Relationship Contract

QCS should create a clear technical and ethical contract.

1. **The user owns the relationship data.**
2. **Raw relationship data remains local by default.**
3. **QCS does not sell relationship data.**
4. **Advertising cannot modify organic ranking.**
5. **Applications receive only scoped information.**
6. **Sensitive categories are excluded from social matching by default.**
7. **Every memory can be inspected and removed.**
8. **Users can export their relationship in an interoperable format.**
9. **Cloud processing is clearly disclosed.**
10. **The security model is independently audited.**
11. **Private data is not used to train global models without explicit opt-in.**
12. **The user can operate Ric without a mandatory cloud identity.**

These principles should eventually be enforced through:

- Open technical specifications
- Auditable client code
- Cryptographic controls
- Legal commitments
- Independent security assessments
- Transparent data-flow documentation

A promise alone is not enough. The architecture should make violating the promise difficult.

---

# Naming System

| Component | Purpose |
|---|---|
| **Ric OS** | Local operating and security layer |
| **Ric Add-on** | Connects Ric to the current device and applications |
| **Ric Browser** | AI-guided exploration of the open internet |
| **Ric Vault** | Encrypted private relationship storage |
| **Ric Relationship Model** | User-owned model of preferences, goals, memories, and boundaries |
| **Ric Passport** | User-approved public identity and portable credentials |
| **Global Ric** | Public search, community, and website intelligence |
| **Ric Bridge** | Secure API between Ric OS and approved applications |
| **Ric Garden** | Visual relationship-management interface |

---

# Refined Product Description

## Ric OS: Your Relationship With AI, Owned by You

Ric OS is the private foundation of the Ric ecosystem. It allows Ric Browser, Ric Add-on, Ric applications, and connected devices to work together through a secure, user-controlled relationship model.

Most technology companies create hidden profiles about their users. These profiles are stored on corporate servers and used to predict what people will watch, read, purchase, or believe. Users rarely understand the full profile being created and have little power to correct it.

Ric takes a different approach.

Ric’s understanding of the user is treated as a relationship, not a corporate profile. That relationship is stored primarily on the user’s own hardware. The user can see what Ric remembers, understand why Ric reached a conclusion, change inaccurate assumptions, establish boundaries, and decide exactly which applications or cloud services may access each part of the relationship.

The relationship can be encrypted, backed up, and transferred between computers. A user may carry Ric on an encrypted drive, synchronize Ric across authorized devices, or run Ric locally without giving QCS access to private browsing history, personal memories, or sensitive preferences.

Because Ric can learn locally, the relationship can be more detailed than the profiles created by conventional technology companies while remaining more private. Ric Browser can use that private local understanding to rank public search results, recommend useful websites, reduce unwanted content, and connect the user with relevant communities.

The global Ric organizes websites, public conversations, and community intelligence. The local Ric understands the individual. The private relationship does not need to be surrendered to the global system.

Users can also communicate directly with their relationship.

A person trying to recover from addiction can tell Ric not to interpret repeated exposure as a desire for more drug-related content. The user can ask Ric to reduce triggering recommendations, prioritize recovery resources, and keep the entire preference private. A researcher can tell Ric that a sensitive search was professional rather than personal. A user can ask Ric to forget a temporary interest or prevent a subject from being used for social matching.

Ric OS gives people something that conventional recommendation systems do not:

> **The ability to participate in, understand, and control the intelligence that personalizes their digital life.**

This creates a foundation for an AI ecosystem where deep personalization and strong privacy are not opposites. They become mutually reinforcing.

---

# The Core Innovation

The concept is not that AI learns about the user. Many companies already do that.

The innovation is the combination of:

- **Local ownership**
- **Visible memory**
- **Negotiable interpretation**
- **Purpose-limited access**
- **Portable identity**
- **User-controlled boundaries**
- **Private local ranking**
- **Consent-based social connection**

The strongest one-sentence explanation is:

> **Ric OS turns the hidden profile that technology companies build about you into a private, portable, user-controlled relationship that works for you.**

Another strong version is:

> **Big Tech profiles you from the outside. Ric builds a relationship with you from the inside—and you own it.**

---

# Critical Engineering Reality

## “QCS knows nothing about the user”

This can only be true if the architecture is designed and verified accordingly.

QCS could still learn information through:

- Search requests
- IP addresses
- Account registration
- Crash reports
- Social interactions
- Cloud model prompts
- Payment records
- Device synchronization
- Community moderation

A more defensible promise is:

> QCS does not receive the user’s raw relationship database, and all network disclosures are minimized, purpose-limited, and visible.

## “Anonymous profiles”

Anonymous profiles are often not truly anonymous. Highly detailed profiles can be reidentified.

Use terms such as:

- Privacy-preserving signals
- Pseudonymous matching
- Locally evaluated compatibility
- Minimal-disclosure credentials
- Differentially private aggregates

Do not rely only on removing a username.

## “Hardware relationship”

Hardware-backed storage is valuable, but tying everything to one physical machine creates recovery and portability problems.

The better model is:

> A cryptographically protected, user-owned relationship stored locally and optionally anchored by secure hardware.

---

# Recommended Development Sequence

## Phase 1: Ric Vault and Relationship Dashboard

Build:

- Local encrypted storage
- Explicit user preferences
- Memory inspection
- Memory editing
- Export and import
- Permissions
- Local audit trail
- Browser extension integration

No social matching is required yet.

## Phase 2: Ric Browser Local Ranking

Build:

- Candidate result retrieval
- Local personalization
- Like and dislike signals
- “Why this result?” explanations
- Sensitive-topic policies
- Neutral-ranking comparison

## Phase 3: Ric Application Bridge

Build:

- Scoped local API
- Application registration
- Capability tokens
- Consent prompts
- Per-purpose permissions
- Developer SDK

## Phase 4: Portable Ric Identity

Build:

- Ric Passport
- Encrypted cross-device transfer
- Device authorization
- Recovery keys
- User-controlled synchronization

## Phase 5: Privacy-Preserving Social Discovery

Build:

- Opt-in matching
- Local compatibility evaluation
- Minimal public profiles
- Mutual consent
- Topic-specific identities
- Blocking, reporting, and moderation

This order matters. Establish user ownership and local privacy before building the social network.

---

# Foundational Principle

> **Nothing Ric learns about a person automatically becomes something QCS knows about that person.**

That principle captures the technical, ethical, and commercial difference between Ric and conventional recommendation platforms.

**Confidence: 9.4/10**
