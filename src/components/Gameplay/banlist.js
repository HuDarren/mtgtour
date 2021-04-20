import React from "react";
import "./banlist.css";

function Banlist() {
  return (
    <div className="container">
      <div className="title">EDH / Commander Rules</div>
      <div className="text-container">
        <div className="text">
          <p>Players must choose a legendary creature as the "General"</p>
          <p>
            Legend Rule: If a player controls two or more Legendary permanents
            with the same name, that player chooses one of them and the rest are
            put into their owner's graveyards
          </p>
          <p>
            An EDH deck must contain exactly 100 cards, including the general
            With the exception of basic lands, no two cards in the deck may have
            the same english name.
          </p>
          <p>
            <p>Partial Paris Mulligan rule </p>
            <p>
              A: In turn order, players may exile (face down) some or all of the
              cards in their hand.
            </p>
            <p>
              B Each player then draws cards from their deck equal to the number
              they exiled.
            </p>
            <p>
              C: Players who exiled at least one card may return to step 1 and
              repeat the process, drawing one less card each time thereafter.
            </p>
            <p> D: Players shuffle all exiled cards into their deck.</p>
          </p>
          <p>All "Infinite" Combo’s are banned!</p>
          <p> Ancestral </p>
          <p>Recall </p>
          <p>Balance</p>
          <p>Biorhythm</p>
          <p>Black Lotus</p>
          <p>Braids, Cabal Minion</p>
          <p>Coalition Victory</p>
          <p>Channel</p>
          <p>Emrakul, the Aeons Torn</p>
          <p>Erayo</p>
          <p>FastBond</p>
          <p>Gifts Ungiven</p>
          <p>Griselbrand</p>
          <p>Karakas</p>
          <p>Library of Alexandria</p>
          <p>Limited Resource</p>
          <p>Mox Sapphire, Ruby, Pearl, Emerald and Jet</p>
          <p>Paradox Engine</p>
          <p>Panoptic Mirror</p>
          <p>Primeval Titan</p>
          <p>Prophet of Kruphix</p>
          <p>Recurring Nightmare</p>
          <p>Rofellos</p>
          <p>Shahrazad</p>
          <p>Sundering Titan</p>
          <p>Sylvan Primoridal</p>
          <p>Sway of the Stars</p>
          <p>Time Vault</p>
          <p>Time Walk</p>
          <p>Tinker</p>
          <p>Tolarian Academy</p>
          <p>Upheaval</p>
          <p>Worldgorger Dragon</p>
          <p>Worldfire</p>
          <p>Yawgmoth's Bargain</p>
          <p>Armageddon</p>
          <p>Deadeye Navigator</p>
          <p>Hatred</p>
          <p>Hive Mind</p>
          <p>Ischron Scepter</p>
          <p>Intruder Alarm</p>
          <p>Iona, Shield of Emeria</p>
          <p>Knowledge Pool</p>
          <p>Master of Cruelities</p>
          <p>Mind Slaver</p>
          <p>Mirror Universe</p>
          <p>Omniscience</p>
          <p>Thrumming Stone</p>
          <p>Tunnel Vision</p>
          <p>Sunder</p>
          <p>Emrakul the Promised End</p>
          <p>
            <p>
              <p>Play rules:</p>
              <p>
                If a player has been dealt 21 points of combat damage by a
                particular Commander (including your own Commander under somone
                else's control ) during the game, that player loses a
                game.Commander Damage is cumulative throughout the game; nothing
                can reduce the amount of damage a Commander has previously done
                to a player.
              </p>
              <p>A player with 15 or more Poison counters loses the game.</p>
              <p>Players begin the game with 40 life.</p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banlist;
