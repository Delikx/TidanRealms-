package com.company.assembleegameclient.objects {
import com.company.assembleegameclient.game.GameSprite;
import com.company.assembleegameclient.ui.panels.Panel;

import kabam.rotmg.game.view.MysteryBoxPanel;

public class MysteryBoxGround extends GameObject implements IInteractiveObject {

    public function MysteryBoxGround(_arg1:XML) {
        super(_arg1);
        isInteractive_ = true;
    }

    public function getPanel(_arg1:GameSprite):Panel {
        return (new MysteryBoxPanel(_arg1, objectType_));
    }


}
}
