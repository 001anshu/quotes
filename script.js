let vani;
if(localStorage.getItem("vani")){
  vani=JSON.parse(localStorage.getItem("vani"));
}
else{
  vani="Hare krishna";
}
document.querySelector("#quote").innerHTML=vani;
localStorage.setItem("vani",JSON.stringify(vani));



let loc;
if(localStorage.getItem("loc")){
  loc=JSON.parse(localStorage.getItem("loc"));
}
else{
  loc="Gauranga";
}
document.querySelector("#reference").innerHTML=loc;
localStorage.setItem("loc",JSON.stringify(loc));

function go(){
  var a={
    "Anyone who is steady in his determination for the advanced stage of spiritual realization and can equally tolerate the onslaughts of distress and happiness is certainly a person eligible for liberation.":
    `"― A.C. Bhaktivedanta Swami Prabhupada, The Bhagavad-gita"`,
    "Religion means to know God and to love Him."
    :`"― A. C. Bhaktivedanta Swami Prabhupada, The Science of Self-Realization"`,
    "Concerning Concealment as a symptom of love for Krsna -> It has been stated, 'although Srimati Radharani developed a deep loving affection for Krsna, She hid Her attitude in the core of Her heart so that others could not detect Her actual condition.":`"― A.C. Bhaktivedanta Swami Prabhupada, The Nectar of Devotion: The Complete Science of Bhakti-Yoga"`,
    "“One whose happiness is within, who is active within, who rejoices within and is illumined within, is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme.”":`"― A.C. Bhaktivedanta Swami Prabhupāda, Bhagavad-gita As It Is"`,
    "“Religion without philosophy is sentiment, or sometimes fanaticism, while philosophy without religion is mental speculation.”":`"― A.C. Bhaktivedanta Swami Prabhupāda, Bhagavad-Gita As It Is"`,
    "In the Bhakti Rasamrita Sindhu, Rupa Goswami Prabhupada has recommended anything dovetailed in Krishna Consciousness is real renouncement. The Mayavadis renouncement with an ambition of becoming one with the Supreme is called false renunciation. They renounce the world for a greater sense gratification. To maintain an ambition of becoming one with the Supreme is the top rank sense gratification; whereas a person in all kinds of apparently material works, but ultimately the beneficiary is Krishna, is in a greater position of renunciation than the Mayavadis. So do not forget Krishna in any circumstance of life and Krishna will save you from all pitfalls of material existence.":`Letter to Jaya Govinda, 3 February, 1970`,
    "My open advice is that if any one can remain a Brahmacari, it is very nice, but there is no need of artificial Brahmacaris. In Bhagavad-gita it is stated that one who exhibits outwardly as self-restrained, but inwardly he thinks of sense gratification he is condemned as mithyacara which means false pretender. We do not want any false pretenders in numbers, but we want a single sincere soul. There is no harm in accepting a wife and living without any disturbance of the mind and thus sincerely advancing in Krishna Consciousness.":`Letter to Lalita Kumar, 2 February, 1970`,
    
    "The tendency you report of the householders living at the expense of others in our Society, is not good. One way to earn money is by selling books, they can be given a salary or commission. But if you say that they do not want to do that, yes, they should do some honest work.”:`Letter to Harikesa Swami, 1 February, 1977`,”Krsna is not monopolized by a certain class of men. Don't think like that, that  Krsna is Indian, Krsna is Hindu, or like that, or ksatriya. Therefore He is meant for others. No. Because He is the Supreme Personality of Godhead, He is everyone's property.”:`Lecture on Bhagavad-gita 16.5, Hawaii, January 31, 1975`,”By devotional service, by understanding well the Supreme Personality of Godhead, one can go to His abode and never come back again to this material condition. How is it possible? The answer is, simply by chanting His name constantly. This is accepted by the exemplary disciple, Arjuna, who has perfectly learned the conclusion of spiritual science from the yogesvara, the master of mystic knowledge, Krsna. Recognizing Krsna to be the Supreme Brahman, Arjuna addresses Him, sthane hrsikesa...: The world becomes joyful hearing Your name, and thus do all become attached to You. (Bg. 11.36) The process of chanting is herein authorized as the direct means of contacting the Supreme Absolute Truth, the Personality of Godhead. Simply by chanting the holy name Krsna, the soul is attracted by the Supreme Person, Krsna, to go home, back to Godhead.”:`Letter to J. F. Staal, Professor of Philosophy and of South Asian Languages, University of California, Berkeley, California, 30 January, 1970`,”Everyone is duratma, anisvaram: There is no isvara. This is a false manifestation. That is not false. You study everything. You study even one plant. You can see so many arrangement, so many fibers. Fine fibers are coming out, and from one fiber to another. Even a small herb and vegetable, you will find there is craftsmanship. You cannot say it is chance. You cannot do it. So there is brain. That is right conclusion, There is brain behind it, and that is theism.":`Lecture on Bhagavad-gita 16.8, Tokyo, January 28, 1975`,
    "Where ever you deliver your lectures to students try to introduce at least our small books. If the students purchase these cheaper, smaller books, they will get a permanent impression of Krishna Consciousness. Especially present them Easy Journey to Other Planets, Topmost Yoga, Beyond Birth and Death, Krishna Trilogy, and Nectar of Instruction - these are cheaper and they can purchase them and read them easily.":`Letter to Revatinandana, 27 January, 1976`,
    "You speak of impersonalism. We welcome all impersonalists to come because if they are real impersonalists they will see that our Society is perfect and complete. Ramanujacarya is considered to be very stalwart acharya simply because he completely defeated the impersonalism of Sankaracarya. And even to this day in India, especially in the south, the followers of Ramanujacarya and Sankaracarya engage in talks and always the Sankarites are defeated. But most of the so-called impersonalists of today are rogues.":`Letter to Atreya Rsi Das, 26 January, 1972`,
    "Our form and Krsna's form - different. Krsna is complete spiritual, divine, and we are, at the present moment, although we have got our spiritual form within this body, but because we have no vision of the spiritual form, we are taking this body as our form. This is called illusion.":`Lecture on Bhagavad-gita 7.1, Hong Kong, January 25, 1975`,
    "I am so pleased to learn that you are studying arithmetic so quickly. Five plus five is equal to ten. Two plus two is equal to four. So Krishna plus everything is Vrndavana. Do not forget Krishna, and you shall always be in Vrndavana.":`Letter to Ekendra das Brahmacari, 24 January, 1970`,
    "Krsna consciousness movement means to revive the original consciousness. If one is actually in Krsna, he'll be truthful. Truthfulness. These are the qualities. Cleanliness, always clean, taking thrice bath. Cloth clean, mind clean, body clean, activities clean, desire clean, thinking clean -everything clean. No contamination. This is the test.":`Lecture on Srimad-Bhagavatam 1.16.26-30, Hawaii, January 23, 1974`,
    "According to authorized Vedic Scriptures liberation means to be fixed up in one's original position. The original position is that each and every living entity is part and parcel of the Supreme Lord and as such it is the duty of every living entity to cooperate with the Supreme. This cooperation is devotional service.":`Letter to Barindra Babu, 22 January, 1970`,
    "I am so glad to hear how you are strictly following the regulative principles of devotional service and chanting regularly 16 rounds daily, mostly before Lord Jagannatha. That is our strength in spiritual life and will make for your rapid advancement in Krishna Consciousness. There are three stages of chanting: offensively; free of offense, or in the liberated stage; and in full love of Godhead. Simply continue chanting and any offenses you may be committing, because they are not intentional, will soon vanish by the grace of Lord Jagannatha":`Letter to Sri Govinda, 21 January, 1971`,
    "Those who associate with the mahatmas through service to them become eligible for liberation whereas those who are associating with woman or those who are too attached to woman are paving their way to hell. Therefore the school systems require so many codes and regulations so the children will not feel any inconvenience. The training is geared to producing cats and dogs who will feel quite at home in a society of sense gratification.":`Letter to Jayatirtha, 20 January, 1976`,
    "We have come here to enjoy. Actually, we are not meant for enjoying. We are meant for serving. Krsna Caitanya Mahaprabhu says, jivera svarupa haya-nitya-krsna-dasa: [Cc. Madhya 20.108-109] Our real identity is to serve, to remain under the protection... We are always under the protection, this way or that way, but we are thinking falsely that we are free. We are not free. Krsna is taking care of us.":`Lecture on Srimad-Bhagavatam 1.16.23, Hawaii, January 19, 1974`,
    "The idea of the communist philosophy is that the state should be benefited. But the state being imperfect, the living entities other than the human beings cannot derive any profit. It is therefore no better than the capitalists. For the benefit of the human beings, the capitalist kills the poor animals. Similarly, the communist does the same thing. Where is the difference? Perfect communism is in the Srimad-Bhagavatam wherein it is stated that you feel for the poor animals as well as the human beings. Srimad-Bhagavatam instructs that even if there is a snake or lizard in the house, it is the duty of the householder to see that they are also eating, not starving. So you have to begin your preaching with such broader idea of communism.":`Letter to Dvarakesa, 18 January, 1976`,
    "The king's duty is to see that everyone is following the brahminical culture. The brahmana is executing his occupational duties nicely, the ksatriyas are doing nicely in their occupational duties; similarly, vaisyas, sudras. That is the duty of the government, that everything is going on nicely. Otherwise, it will be a great concern and people will be always filled up with anxieties. There will be so many troubles and problems. We cannot solve them. And it is very difficult to solve in this age of Kali.":`Lecture on Srimad-Bhagavatam 1.16.21, Hawaii, 17 January, 1974`,
    "The absence of the idea of God is not very important, but the sense of loving God is the most important. The cowherd boys and all of the residents of Vrindaban were so much absorbed in love for Krishna that naturally there was absence of the idea of God. Yasoda was so much absorbed in love of Krishna that she did not care to know that He is God. Our whole philosophy is to increase our love for Krishna. Love with awe and veneration and love that is spontaneous is different, but still one has to learn about the greatness of Krishna.":`Letter to Hamsaduta, 16 January, 1969`,
    "We can remember Krishna in every moment. We can remember Krishna while taking a glass of water because the taste of water is Krishna. We can remember Krishna as soon as we see the sunlight in the morning, because the sunlight is a reflection of Krishna's Bodily Effulgence. Similarly, as soon as we see moonlight in the evening we remember Krishna because moonlight is also reflection of sunlight. Similarly, when we hear any sound we can remember Krishna because sound is Krishna, and the most perfect sound, transcendental, is Hare Krishna, which we have to chant 24 hours. So there is no scope of forgetting Krishna at any moment of our life provided we practice in that way.":`Letter to Hayagriva, 15 January, 1968`,
    "There are different kinds of faith, but in Krsna consciousness the preliminary condition of faith is to believe that simply by serving Krsna, everything will be complete.":`Lecture on Bhagavad-gita 4.39-42, Los Angeles, January 14, 1969`



  }
  var quotes=Object.keys(a);
  var quote=quotes[Math.floor(Math.random()*quotes.length)];
  var reference=a[quote];
  document.querySelector("#quote").innerHTML=quote;
  document.querySelector("#reference").innerHTML=reference;
  localStorage.setItem("vani",JSON.stringify(quote));
  localStorage.setItem("loc",JSON.stringify(reference));
  // console.log(quotes.length);
  

}
const butn=document.querySelector(".button-29");

butn.addEventListener("click",Event=>{
  go();
})


// go();