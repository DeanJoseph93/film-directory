<?php 
 $no = $_REQUEST['no'];
 $no = $_GET['no'];
//echo 'no=  ' . $no;


	
    $posts = array(
        array(
            "title" => "Carlo Lucarelli",
            "body" => "Lucarelli was born at Parma, the son of a physician. He was interested in literature and theatre when he was young,
                       and studied Literature and History. Nowadays he lives in Mordano, near Bologna.
                       Already in his years of study, during his research for his thesis subject he got in touch with the material for his
                       first two books, which take place during the time of fascism and the years immediately after the war. In Italy he
                       became well known quite soon because of these two books, and it was only a matter of time before he quit his
                       academic activities and turned to his career as an author and all other sorts of activities, such as writing plays,
                       film scenarios, radio-plays and, moreover, singing in a Post-Punk-Band called Progetto K.
                       He used to be the presenter of a famous Italian television programme about crime (Blu notte misteri d'Italia).
                       As a journalist he works for several newspapers and magazines, such as il manifesto, Il Messaggero and L'Europeo.
                       He has written more than twenty novels and numerous short stories. Together with Marcello Fois and Loriano
                       Macchiavelli he founded Gruppo 13, a collective of crime-writers in the region of Emilia-Romagna.
                       "
        ),

        array(
            "title" => "Stieg Larsson",
            "body" => "On his twelfth birthday, Larsson was given a typewriter as a birthday gift by his parents. Larsson's first
                       efforts at writing fiction were not in the genre of crime, but rather science fiction. An avid science fiction
                       reader from an early age, he became active in Swedish science fiction fandom around 1971; co-edited, together with
                       Rune Forsgren his first fanzine, Sfären, in 1972; and attended his first science fiction convention, SF•72,
                       in Stockholm. Through the 1970s, Larsson published around 30 additional fanzine issues; after his move to Stockholm
                       in 1977, he became active in the Scandinavian SF Society where he was a board member in 1978 and 1979, and chairman
                       in 1980. In his first fanzines, 1972–74, he published a handful of early short stories, while submitting others to
                       other semi-professional or amateur magazines. He was co-editor or editor of several science fiction fanzines,
                       including Sfären and FIJAGH!; in 1978–79, he was president of the largest Swedish science-fiction fan club, Skandinavisk
                       Förening för Science Fiction (SFSF). An account of this period in Larsson's life, along with detailed information
                       on his fanzine writing and short stories, is included in the biographical essays written by Larsson's friend
                       John-Henri Holmberg in The Tattooed Girl, by Holmberg with Dan Burstein and Arne De Keijzer, 2011.
                       In early June 2010, manuscripts for two such stories, as well as fanzines with one or two others, were noted in
                       the Swedish National Library (to which this material had been donated a few years earlier, mainly by the Alvar
                       Appeltofft Memorial Foundation, which works to further science fiction fandom in Sweden). This discovery of what
                       was called 'unknown' works by Larsson caused considerable publicity.
                       Larsson's first name was originally Stig which is the standard spelling. In his early twenties, he changed it to
                       avoid confusion with his friend Stig Larsson, who would go on to become a well-known author well before Stieg
                       did. The pronunciation is the same regardless of spelling.
                       "
        ),

        array(
            "title" => "Niccolo Ammaniti",
            "body" => "Niccolo Ammaniti (born 25 September 1966 in Rome) is an Italian writer, winner of the Premio Strega on 2007 for The
                       Crossroads (also published under the title As God Commands). He became noted in 2001 with the publication of Io non
                       ho paura,[1] a novel which was later made into a movie directed by Gabriele Salvatores.
                       He released Fa un po' male (It's a little bad) on 1 June 2004 by Giulio Einaudi which had a Davide Fabbri illustrated
                       cover.[2]
                       In 2006, he published Come Dio comanda, a novel where nothing should be taken at face value.
                       A crime novel, which is also a weariless dialogue between man and God. A profound view of Italy of the underclass
                       and unemployed where poverty and dreams, nobility and cruelty, humor and sadness are interwoven to the spectacular
                       notion of life itself. Translated by Brian Woods of Camden New Jersey.
                       The three books which have been released in the English language and have been translated by Jonathan Hunt are I'm
                       Not Scared (Io non ho paura), Steal You Away (Ti prendo e ti porto via) and The Crossroads (Come Dio comanda).
                       "
        ),

        array(
            "title" => "Alejandro Jodorowsky",
            "body" => "Alejandro Jodorowsky (Spanish: [aleˈxandɾo xoðoˈɾofski]; born 17 February 1929)is a Chilean-French filmmaker,
                       playwright, actor, author, musician, comics writer and spiritual guru. Best known for his avant-garde films,
                       he has been 'venerated by cult cinema enthusiasts' for his work which 'is filled with violently surreal images
                       and a hybrid blend of mysticism and religious provocation.'
                       Born to Jewish-Ukrainian parents in Chile, Jodorowsky experienced an unhappy and alienated childhood, and so
                       immersed himself in reading and writing poetry. Dropping out of college, he became involved in theater and in
                       particular mime, working as a clown before founding his own theater troupe, the Teatro Mimico, in 1947. Moving
                       to Paris in the early 1950s, Jodorowsky studied mime under Étienne Decroux before turning to cinema, directing
                       the short film Les têtes interverties in 1957. From 1960 he divided his time between Paris and Mexico City, in
                       the former becoming a founding member of the anarchistic avant-garde Panic Movement of performance artists.
                       In 1966 he created his first comic strip, Anibal 5, whilst in 1967 he directed his first feature film, the
                       surrealist Fando y Lis, which caused a huge scandal in Mexico, eventually being banned.
                       His next film, the acid western El Topo (1970), became a hit on the midnight movie circuit in the United
                       States, considered as the first-ever midnight cult film, leading John Lennon to provide Jodorowsky with $1
                       million to finance his next film. The result was The Holy Mountain (1973), a surrealist exploration of western
                       esotericism. Disagreements with the film's distributor Allen Klein, however, led to both The Holy Mountain and
                       El Topo failing to gain widespread distribution, although both became classics on the underground film circuit.
                       "
        ),

        array(
            "title" => "Sandrone Dazieri",
            "body" => "He was born in Cremona in 1964. He graduated at San Pellegrino Terme hotel-management school and worked as a
                       cook for ten years, all around Italy. After having moved to Milan he started working in a number of jobs, from
                       seller to porter, and played a very active role in the movement of Milan social centers.
                       In 1992 he got closer to publishing working as a proofreader for Telepress editorial service, and after five years
                       he was appointed general manager of Milan branch. He also worked as a freelance journalist and collaborated with
                       Manifesto as an expert of counterculture and genre fiction.
                       In 1999 he achieved his first popular success with the thriller Attenti al gorilla (Watch Out For The Gorilla),
                       the first in a best-seller series, where the main character is a sort of doppelgänger of Dazieri himself, living
                       the nightlife in Milan with all the ensuing troubles. Dazieri's books are renowned for the rocambolesque
                       adventures in which Sandrone (the main character has the author's name too) is continuously involved, in an
                       irrefrenable but never fatalistic destiny. It is in fact Sandrone's personality that always drives him to assist
                       the weak and derelict, those who have lost all hope for help but for the Gorilla's saving hand. Among a thousand
                       contradictions, he'll confront all sorts of dangers, in the best tradition of hardboiled thrillers, and aided by
                       his alter ego called Socio (the rational side of Sandrone, in a split-personality condition), our hero will happily
                       finalise and conclude many chilling and hair-raising situations.
                       He wrote two other noir novels (La cura del Gorilla Einaudi - Gorilla Blues Strade Blu Mondadori), a novel for
                       kids (Disney Avventura), some scripts for comics (Pinocchio, Diabolik) and many short stories.
                       His last novels are: E' stato un attimo (Mondadori Strade Blu 2006, translated into English and published by
                       Hersilia Press in 2012), Cemento Armato (ed.Mondadori 2007) and Bestie (VerdeNero edizioni ambiente 2007).
                       He is also a scriptwriter; among his films are La cura del Gorilla (from the same book) directed by Carlo A.
                       Sigon and interpreted by Claudio Bisio, Un gioco da ragazze directed by Matteo Rovere and L'ultima Battuta,
                       a TV movie.
                       With Italian film director Gabriele Salvatores and producer Maurizio Totti, Dazieri founded in 2004 the publishing
                       house Colorado Noir.
                       From 2000 to 2004 he was also the chief editor of the crime series Gialli Mondadori (Mondadori Thrillers) and
                       the catalogue for young readers Libri per Ragazzi Mondadori (Mondadori Books for Youth). He is currently a
                       literary consultant to the Mondadori Publishing House.
                       "
        ),

        array(
            "title" => "Roberto	Saviano",
            "body" => "Roberto Saviano (Italian pronunciation: [roˈbɛrto saˈvjano]; born September 22, 1979) is an Italian writer and
                       journalist.
                       In his writings, articles, television programs, and books he employs prose and news-reporting style to narrate
                       the story of the Camorra (a powerful Neapolitan mafia-like organization), exposing its territory and business
                       connections.
                       Since 2006, following the publication of his bestselling book Gomorrah (Gomorra in Italian), where he describes
                       the clandestine particulars of the Camorra business, Saviano has been threatened by several Neapolitan 'godfathers'.
                       The Italian Minister of the Interior has granted him a permanent police escort. Because of his courageous stance,
                       he is considered a 'national hero' by author-philosopher Umberto Eco. He lives at a secret location to avoid
                       reprisal attacks for his book about the mafia, Gomorrah. Saviano was also accused by former Italian Prime Minister
                       Silvio Berlusconi of defaming the country and being unpatriotic.
                       "
        ),

        array(
            "title" => "Jonathan Coe",
            "body" => "Jonathan Coe (born 19 August 1961) is an English novelist and writer. His work has an underlying preoccupation
                       with political issues, although this serious engagement is often expressed comically in the form of satire.
                       For example, What a Carve Up! reworks the plot of an old 1960s spoof horror film of the same name. It is set within
                       the 'carve up' of the UK's resources which was carried out by Margaret Thatcher's right wing Conservative governments
                       of the 1980s.
                       Coe has long been interested in both music and literature. In the mid-1980s he played with a band (The Peer Group)
                       and tried to get a recording of his music. He also wrote songs and played keyboards for a short-lived feminist cabaret
                       group, Wanda and the Willy Warmers.
                       He published his first novel, The Accidental Woman, in 1987. In 1994 his fourth novel What a Carve Up! won the John
                       Llewellyn Rhys Prize, and the Prix du Meilleur Livre Étranger in France. It was followed by The House of Sleep which
                       won the Writers' Guild of Great Britain Best Novel award and, in France, the Prix Médicis. As of 2010, Coe has
                       published nine novels.
                       "
        )

    );

    echo ( json_encode($posts[$no]) );

?>