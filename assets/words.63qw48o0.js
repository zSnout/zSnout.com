const n=`# antonym?: string[] | string
# category:
#   adjective, adverb, conjunction, determiner, exclamation, noun, number,
#   preposition, pronoun, relative, verb
# examples?: [source: string, translation: string][]
# notes?: string
# plural?: string[] | string
# similar?: string[] | string
# singular?: string[] | string
# synonym?: string[] | string
# translation: string

a:
  category: preposition
  examples:
    - [kali me a los., I greet them all.]
    - [wakeli me a San Francisco., I walk to San Francisco.]
  notes:
    Separates the subject or destination of an action from its object (what it
    is acting on). The object is the thing being targeted by the action, NOT the
    subject performing it.
  translation: to / (no English equivalent)

al:
  category: determiner
  examples:
    - [al ja., The truth.]
    - [al wakeli., The thing that walks.]
    - [nili al kato., The cat lies.]
  notes: If _al_ is before a noun, it means "the _____." If before an adjective
    or verb, it means "the thing that is _____."

    _al_ is used when the identity of something is known to the reader. For
    example, if a dog was already introduced into a conversation (e.g. _wakeli_
    _il_ _soro_), you would use _al_ for the remaining instances of the same dog
    (e.g. _wakeli_ _il_ _soro_. _teneli_ _me_ _a_ _al_ _soro_.)
  similar: il
  translation: the

amo:
  category: noun
  similar: amoli
  translation: love

amoli:
  category: verb
  examples:
    - [amoli me a te., I love you.]
  similar: amo
  translation: to love

ano:
  category: noun
  translation: a year

awa:
  antonym: ka
  category: [exclamation, verb]
  examples:
    - [awa!, Goodbye!]
    - [awa _panalan_., "Goodbye brother."]
  notes: If _awa_ is present before a noun, it means "Goodbye (noun)."
  similar: awali
  translation: goodbye

awali:
  antonym: kali
  category: verb
  examples:
    - [awali du kato., Many cats greet.]
    - [awali leopado a te., A leopard greets you.]
  similar: awa
  translation: to

emoso:
  category: noun
  translation: emotion

es:
  category: verb
  examples:
    - [Zachary es mi nama?, Is my name Zachary?]
    - [leapali es te?, Are you leaping?]
    - [es kewai?, Does quiet exist?]
    - [es kewai?, Is it quiet?]
  notes: 1. If _es_ is between two phrases, it marks a question. For example, "A
    _es_ E." would translate to "Is E A?" The reversed argument order may be
    confusing to native English speakers, but it fits with the
    verb-subject-object order of Lang.

    2. If _es_ is before a noun, it questions the noun's existence. If before an
    adjective or verb, is questions whether _____ exists. This can take many
    forms based on the verb at hand.
  similar: se
  translation: is / does it exist

eto:
  category: noun
  translation: a month

i:
  category: conjunction
  examples:
    - [il soro i kato., A dog and cat.]
    - [il soro i kato i leopado., "A dog, cat and leopard."]
  translation: and

il:
  category: determiner
  examples:
    - [il ja., A truth.]
    - [il wakeli., Something that walks.]
    - [nili il kato., A cat lies.]
  notes: If _il_ is before a noun, it means "a _____." If before an adjective or
    verb, it means "something that is _____."

    _il_ is used when the identity of something is not known to the reader. For
    example, if you introduced a dog into a conversation that was not mentioned
    before, you would call it _il_ _soro_.
  similar: al
  translation: a

ito:
  category: noun
  similar: itoli
  translation: a person

itoli:
  category: verb
  similar: ito
  translation: to personify

o:
  category: conjunction
  examples:
    - [il soro o kato., A dog or cat.]
    - [il soro o kato o leopado., "A dog, cat or leopard."]
  similar: ko
  translation: or

oda:
  category: noun
  translation: an hour

ban:
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of ba- before another word
    describing a relative.
  similar: bun
  translation: spouse

bun:
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of bu- before another word
    describing a relative.
  similar: ban
  translation: ex-spouse

dan:
  category: number
  similar: danol
  translation: five

danol:
  category: number
  notes: If used after a number, it multiplies the number by 100,000.
  similar: dan
  translation: one hundred thousand

de:
  category: preposition
  examples:
    - [soro de te., The dog owned by you.]
    - [soro de te., Your dog.]
    - [wakeli soro de te., Your dog walks.]
  similar: mi
  translation: of / owned by / inside of

du:
  category: [adjective, determiner]
  examples:
    - [mi du kato., My many cats.]
    - [du mi kato., Many of my cats.]
    - [du soro., Many dogs.]
  translation: many of

ja:
  antonym: ni
  category: [adjective, exclamation, noun]
  notes:
    This word has multiple meanings based on the context. When standing alone,
    it means "Yes," the exclamation. However, _il_ _ja_ means a truth.
  similar: jali
  translation: yes / true / truth

jad:
  antonym: kad
  category: [adjective, noun]
  notes:
    This can mean the noun "good" or the quality of being good, depending on the
    context.
  translation: good

jak:
  category: number
  similar: jakol
  translation: nine

jaka:
  antonym: sane
  category: [adjective, noun]
  similar: jakali
  translation: sad / sadness

jakali:
  antonym: saneli
  category: verb
  similar: jaka
  translation: to be sad

jakol:
  category: number
  notes: If used after a number, it multiplies the number by 1,000,000,000.
  similar: jak
  translation: one billion

jali:
  antonym: nili
  category: verb
  similar: ja
  translation: to speak the truth, to be true

jani:
  category: adverb
  notes:
    If used before a phrase, it means "maybe this will happen." This word is
    also a combination of _ja_ and _ni_, or yes and no.
  translation: maybe

ka:
  antonym: awa
  category: [exclamation, verb]
  examples:
    - [ka!, Hello!]
    - [ka lan., "Hello parents."]
  notes: _ka_ on its own never means "greeting." However, it may be combined
    with _il_ to produce _il_ _ka_, which means "a greeting." It may also be
    used to form _kali_, which means "to greet."

    If _ka_ is present before a noun, it means "Hello (noun)."
  similar: kali
  translation: hello / greeting

kali:
  antonym: awali
  category: verb
  examples:
    - [kali Zachary., Zachary greets.]
    - [kali leopado a te., A leopard greets you.]
  similar: ka
  translation: to greet

kad:
  antonym: jad
  category: adjective
  notes: The quality of being bad.
  translation: bad

kato:
  category: noun
  translation: cat

kewai:
  antonym: nikai
  category: adjective
  similar: kewaili
  translation: quiet, silence

kewaili:
  antonym: nikaili
  category: verb
  similar: kewai
  translation: to silence / to whisper

kia:
  category: noun
  translation: a day

ko:
  category: conjunction
  examples:
    - [il soro ko kato., Either a dog or a cat.]
    - [il soro ko kato ko leopado., "Either a dog, a cat or a leopard."]
  similar: o
  translation: exclusive or

kolow:
  category: noun
  examples:
    - [kolow de kato., The color of the cat.]
  translation: color

konsi:
  category: noun
  similar: konsili
  translation: a thought

konsili:
  category: verb
  similar: konsi
  translation: to consider / to think

laka:
  category: noun
  similar: lakali
  translation: tears

lakali:
  category: verb
  similar: laka
  translation: to cry

lam:
  category: number
  similar: lamol
  translation: six

lamol:
  category: number
  notes: If used after a number, it multiplies the number by 1,000,000.
  similar: lam
  translation: one million

lan:
  antonym: nal
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of la- before another word
    describing a relative.
  similar: lun
  translation: parent(s)

lap:
  category: number
  similar: lapol
  translation: eight

lapol:
  category: number
  notes: If used after a number, it multiplies the number by 100,000,000.
  similar: lap
  translation: one hundred million

le:
  category: pronoun
  notes: The singular third person pronoun.
  plural: los
  translation: they

leap:
  category: noun
  similar: leapali
  translation: jump / leap

leapali:
  category: verb
  similar: leap
  translation: to jump / to leap

leopado:
  category: noun
  translation: leopard

lis:
  category: noun
  similar: lisali
  translation: a book

lisali:
  category: verb
  similar: lis
  translation: to read

lo:
  category: number
  translation: zero

los:
  category: pronoun
  notes: The plural third person pronoun.
  singular: le
  translation: they all

lun:
  antonym: nul
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of lu- before another word
    describing a relative.
  similar: lan
  translation: grandparent(s)

man:
  antonym: pan
  category: [adjective, relative]
  notes: When used before a phrase, it indicates that the phrase has a female
    gender.

    _man_ may also be used in its prefix form of ma- before another word
    describing a relative.
  translation: female

me:
  category: pronoun
  examples:
    - [nili me., I lie.]
    - [kali me pan ito., I greet a male person.]
  notes:
    The singular first person pronoun. The "me" pronoun is the only pronoun to
    have multiple plural forms. See _nas_, _nes_, and _nos_ for more.
    information.
  plural: [nas, nes, nos]
  translation: me

mede:
  category: noun
  similar: medeli
  translation: a hug

medeli:
  category: verb
  similar: mede
  translation: to hug

mena:
  category: noun
  similar: menali
  translation: a kiss

menali:
  category: verb
  similar: mena
  translation: to kiss

mi:
  category: determiner
  examples:
    - [mi kato., My cat.]
    - [leapali mi leopado., My leopard leaps.]
  translation: my

nad:
  category: number
  similar: nadol
  translation: two

nadol:
  category: number
  notes: If used after a number, it multiplies the number by 100.
  similar: nad
  translation: one hundred

nak:
  category: number
  similar: nakol
  translation: three

nakol:
  category: number
  notes: If used after a number, it multiplies the number by 1000.
  similar: nak
  translation: one thousand

nal:
  antonym: lan
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of na- before another word
    describing a relative.
  similar: nul
  translation: child(ren)

nalan:
  category: [noun, relative]
  translation: sibling

nalun:
  category: [noun, relative]
  translation: uncle or aunt

nama:
  category: noun
  translation: name

nas:
  category: pronoun
  examples:
    - [wakeli nas., Me and you walk.]
    - [leapali soro de nes., Our (my and your) dog leaps.]
  notes:
    One of the plural first person pronouns. It includes the 1st and 2nd persons
    in the conversation.
  singular: me
  translation: me and you

nes:
  category: pronoun
  notes:
    One of the plural first person pronouns. It includes the 1st, 2nd, and 3rd
    persons in the conversation.
  singular: me
  translation: me and you and them

ni:
  antonym: ja
  category: [adjective, exclamation, noun, preposition]
  notes:
    This word has multiple meanings based on the context. When standing alone,
    it means "No," the exclamation. However, _il_ _ni_ means a lie. If it's
    before another phrase, it means "not _____."
  similar: nili
  translation: no / not / false / falsehood

nikai:
  antonym: kewai
  category: adjective
  translation: loud

nikaili:
  antonym: kewaili
  category: verb
  translation: to shout

nili:
  antonym: jali
  category: verb
  examples:
    - [nili me., I lie.]
    - [nili me a te., I lie to you.]
  similar: ni
  translation: to lie

nim:
  category: noun
  translation: a minute

nos:
  category: pronoun
  notes:
    One of the plural first person pronouns. It includes the 1st and 3rd persons
    in the conversation.
  singular: me
  translation: me and them

nul:
  antonym: lun
  category: [noun, relative]
  notes:
    This word can also be used in its prefix form of nu- before another word
    describing a relative.
  similar: nal
  translation: grandchild(ren)

nulun:
  category: [noun, relative]
  translation: cousin

pam:
  category: number
  similar: pamol
  translation: seven

pamol:
  category: number
  notes: If used after a number, it multiplies the number by 10,000,000.
  similar: pam
  translation: ten million

pan:
  antonym: man
  category: [adjective, relative]
  notes: When used before a phrase, it indicates that the phrase has a male
    gender.

    _pan_ may also be used in its prefix form of pa- before another word
    describing a relative.
  translation: female

pon:
  category: noun
  translation: an hour

sam:
  category: number
  similar: samol
  translation: one

samol:
  category: number
  notes: If used after a number, it multiplies the number by 10.
  similar: sam
  translation: ten

sane:
  antonym: jaka
  category: [adjective, noun]
  similar: saneli
  translation: happy / happiness

saneli:
  antonym: jakali
  category: verb
  similar: sane
  translation: to be happy

se:
  category: verb
  examples:
    - [Zachary se mi nama., My name is Zachary.]
    - [jad se me., I am happy.]
  translation: is

seku:
  category: noun
  translation: a second

si:
  category: conjunction
  examples:
    - [E si A., E if A.]
    - [saneli me si teneli me a soro., I am happy if I have a dog.]
  translation: if

soro:
  category: noun
  translation: dog

tad:
  category: adjective
  similar: tadali
  translation: dislike

tadali:
  category: verb
  similar: tad
  translation: to dislike

taka:
  category: noun
  similar: takali
  translation: anger

takali:
  category: verb
  similar: taka
  translation: to be angry

te:
  category: pronoun
  examples:
    - [nili te., You lie.]
  notes: The singular second person pronoun.
  plural: tos
  translation: you

teneli:
  category: verb
  examples:
    - [teneli me a il kato., I have a cat.]
  translation: to have / to own

tos:
  category: pronoun
  examples:
    - [es tos du nalan?, Are you all siblings?]
  notes: The plural second person pronoun.
  singular: te
  translation: you all

wake:
  category: noun
  similar: wakeli
  translation: walk

wakeli:
  category: verb
  similar: wake
  translation: to walk

wan:
  category: number
  similar: wanol
  translation: four

wanol:
  category: number
  notes: If used after a number, it multiplies the number by 10,000.
  similar: wan
  translation: ten thousand
`;export{n as default};
