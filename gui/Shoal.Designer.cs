using Gui.models;

namespace Gui
{
    partial class shoalGui
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(shoalGui));
            this.gamePanel = new System.Windows.Forms.Panel();
            this.gameLabel = new System.Windows.Forms.Label();
            this.raidPanel = new System.Windows.Forms.Panel();
            this.raidLabel = new System.Windows.Forms.Label();
            this.botPanel = new System.Windows.Forms.Panel();
            this.botLabel = new System.Windows.Forms.Label();
            this.playerPanel = new System.Windows.Forms.Panel();
            this.playerLabel = new System.Windows.Forms.Label();
            this.traderPanel = new System.Windows.Forms.Panel();
            this.tradersLabel = new System.Windows.Forms.Label();
            this.shoalLabel = new System.Windows.Forms.Label();
            this.versionLabel = new System.Windows.Forms.Label();
            this.shoalicon = new System.Windows.Forms.PictureBox();
            this.gamePanelButton = new Gui.models.LeftPanelButton();
            this.raidPanelButton = new Gui.models.MidPanelButton();
            this.playerPanelButton = new Gui.models.MidPanelButton();
            this.botPanelButton = new Gui.models.MidPanelButton();
            this.traderPanelButton = new Gui.models.RightPanelButton();
            this.gamePanel.SuspendLayout();
            this.raidPanel.SuspendLayout();
            this.botPanel.SuspendLayout();
            this.playerPanel.SuspendLayout();
            this.traderPanel.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.shoalicon)).BeginInit();
            this.SuspendLayout();
            // 
            // gamePanel
            // 
            this.gamePanel.Controls.Add(this.gameLabel);
            this.gamePanel.Location = new System.Drawing.Point(0, 100);
            this.gamePanel.Name = "gamePanel";
            this.gamePanel.Size = new System.Drawing.Size(531, 548);
            this.gamePanel.TabIndex = 0;
            // 
            // gameLabel
            // 
            this.gameLabel.AutoSize = true;
            this.gameLabel.Font = new System.Drawing.Font("Borda 8", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gameLabel.ForeColor = System.Drawing.Color.White;
            this.gameLabel.Location = new System.Drawing.Point(460, 509);
            this.gameLabel.Name = "gameLabel";
            this.gameLabel.Size = new System.Drawing.Size(62, 21);
            this.gameLabel.TabIndex = 1;
            this.gameLabel.Text = "> Game";
            // 
            // raidPanel
            // 
            this.raidPanel.Controls.Add(this.raidLabel);
            this.raidPanel.Location = new System.Drawing.Point(0, 100);
            this.raidPanel.Name = "raidPanel";
            this.raidPanel.Size = new System.Drawing.Size(531, 548);
            this.raidPanel.TabIndex = 1;
            // 
            // raidLabel
            // 
            this.raidLabel.AutoSize = true;
            this.raidLabel.Font = new System.Drawing.Font("Borda 8", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.raidLabel.ForeColor = System.Drawing.Color.White;
            this.raidLabel.Location = new System.Drawing.Point(462, 509);
            this.raidLabel.Name = "raidLabel";
            this.raidLabel.Size = new System.Drawing.Size(60, 21);
            this.raidLabel.TabIndex = 1;
            this.raidLabel.Text = "> Inraid";
            // 
            // botPanel
            // 
            this.botPanel.Controls.Add(this.botLabel);
            this.botPanel.Location = new System.Drawing.Point(0, 100);
            this.botPanel.Name = "botPanel";
            this.botPanel.Size = new System.Drawing.Size(531, 548);
            this.botPanel.TabIndex = 2;
            // 
            // botLabel
            // 
            this.botLabel.AutoSize = true;
            this.botLabel.Font = new System.Drawing.Font("Borda 8", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.botLabel.ForeColor = System.Drawing.Color.White;
            this.botLabel.Location = new System.Drawing.Point(468, 509);
            this.botLabel.Name = "botLabel";
            this.botLabel.Size = new System.Drawing.Size(54, 21);
            this.botLabel.TabIndex = 1;
            this.botLabel.Text = "> Bots";
            // 
            // playerPanel
            // 
            this.playerPanel.Controls.Add(this.playerLabel);
            this.playerPanel.Location = new System.Drawing.Point(0, 100);
            this.playerPanel.Name = "playerPanel";
            this.playerPanel.Size = new System.Drawing.Size(531, 548);
            this.playerPanel.TabIndex = 3;
            // 
            // playerLabel
            // 
            this.playerLabel.AutoSize = true;
            this.playerLabel.Font = new System.Drawing.Font("Borda 8", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.playerLabel.ForeColor = System.Drawing.Color.White;
            this.playerLabel.Location = new System.Drawing.Point(456, 509);
            this.playerLabel.Name = "playerLabel";
            this.playerLabel.Size = new System.Drawing.Size(66, 21);
            this.playerLabel.TabIndex = 1;
            this.playerLabel.Text = "> Player";
            this.playerLabel.Click += new System.EventHandler(this.playerLabel_Click);
            // 
            // traderPanel
            // 
            this.traderPanel.Controls.Add(this.tradersLabel);
            this.traderPanel.Location = new System.Drawing.Point(0, 100);
            this.traderPanel.Name = "traderPanel";
            this.traderPanel.Size = new System.Drawing.Size(531, 548);
            this.traderPanel.TabIndex = 4;
            this.traderPanel.Paint += new System.Windows.Forms.PaintEventHandler(this.traderPanel_Paint);
            // 
            // tradersLabel
            // 
            this.tradersLabel.AutoSize = true;
            this.tradersLabel.Font = new System.Drawing.Font("Borda 8", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.tradersLabel.ForeColor = System.Drawing.Color.White;
            this.tradersLabel.Location = new System.Drawing.Point(450, 509);
            this.tradersLabel.Name = "tradersLabel";
            this.tradersLabel.Size = new System.Drawing.Size(72, 21);
            this.tradersLabel.TabIndex = 0;
            this.tradersLabel.Text = "> Traders";
            this.tradersLabel.Click += new System.EventHandler(this.tradersLabel_Click);
            // 
            // shoalLabel
            // 
            this.shoalLabel.AutoSize = true;
            this.shoalLabel.Font = new System.Drawing.Font("Borda 8", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.shoalLabel.ForeColor = System.Drawing.Color.White;
            this.shoalLabel.Location = new System.Drawing.Point(50, 24);
            this.shoalLabel.Name = "shoalLabel";
            this.shoalLabel.Size = new System.Drawing.Size(51, 24);
            this.shoalLabel.TabIndex = 5;
            this.shoalLabel.Text = "shoal";
            // 
            // versionLabel
            // 
            this.versionLabel.AutoSize = true;
            this.versionLabel.Font = new System.Drawing.Font("Borda 8", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.versionLabel.ForeColor = System.Drawing.Color.White;
            this.versionLabel.Location = new System.Drawing.Point(477, 12);
            this.versionLabel.Name = "versionLabel";
            this.versionLabel.Size = new System.Drawing.Size(45, 19);
            this.versionLabel.TabIndex = 6;
            this.versionLabel.Text = "v2.0.0";
            // 
            // shoalicon
            // 
            this.shoalicon.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.shoalicon.Image = ((System.Drawing.Image)(resources.GetObject("shoalicon.Image")));
            this.shoalicon.Location = new System.Drawing.Point(12, 19);
            this.shoalicon.Name = "shoalicon";
            this.shoalicon.Size = new System.Drawing.Size(36, 36);
            this.shoalicon.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.shoalicon.TabIndex = 7;
            this.shoalicon.TabStop = false;
            // 
            // gamePanelButton
            // 
            this.gamePanelButton.borderColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.gamePanelButton.buttonColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.gamePanelButton.clicked = false;
            this.gamePanelButton.FlatAppearance.BorderSize = 0;
            this.gamePanelButton.FlatAppearance.CheckedBackColor = System.Drawing.Color.Transparent;
            this.gamePanelButton.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.gamePanelButton.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.gamePanelButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.gamePanelButton.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gamePanelButton.hovering = false;
            this.gamePanelButton.Location = new System.Drawing.Point(12, 61);
            this.gamePanelButton.Name = "gamePanelButton";
            this.gamePanelButton.onClickBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.gamePanelButton.onClickButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.gamePanelButton.onHoverBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.gamePanelButton.onHoverButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.gamePanelButton.Size = new System.Drawing.Size(100, 35);
            this.gamePanelButton.TabIndex = 8;
            this.gamePanelButton.Text = "game";
            this.gamePanelButton.textColor = System.Drawing.Color.White;
            this.gamePanelButton.UseVisualStyleBackColor = true;
            // 
            // raidPanelButton
            // 
            this.raidPanelButton.borderColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.raidPanelButton.buttonColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.raidPanelButton.clicked = false;
            this.raidPanelButton.FlatAppearance.BorderSize = 0;
            this.raidPanelButton.FlatAppearance.CheckedBackColor = System.Drawing.Color.Transparent;
            this.raidPanelButton.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.raidPanelButton.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.raidPanelButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.raidPanelButton.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.raidPanelButton.hovering = false;
            this.raidPanelButton.Location = new System.Drawing.Point(95, 61);
            this.raidPanelButton.Name = "raidPanelButton";
            this.raidPanelButton.onClickBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.raidPanelButton.onClickButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.raidPanelButton.onHoverBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.raidPanelButton.onHoverButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.raidPanelButton.Size = new System.Drawing.Size(100, 35);
            this.raidPanelButton.TabIndex = 9;
            this.raidPanelButton.Text = "raid";
            this.raidPanelButton.textColor = System.Drawing.Color.White;
            this.raidPanelButton.UseVisualStyleBackColor = true;
            // 
            // playerPanelButton
            // 
            this.playerPanelButton.borderColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.playerPanelButton.buttonColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.playerPanelButton.clicked = false;
            this.playerPanelButton.FlatAppearance.BorderSize = 0;
            this.playerPanelButton.FlatAppearance.CheckedBackColor = System.Drawing.Color.Transparent;
            this.playerPanelButton.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.playerPanelButton.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.playerPanelButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.playerPanelButton.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.playerPanelButton.hovering = false;
            this.playerPanelButton.Location = new System.Drawing.Point(178, 61);
            this.playerPanelButton.Name = "playerPanelButton";
            this.playerPanelButton.onClickBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.playerPanelButton.onClickButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.playerPanelButton.onHoverBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.playerPanelButton.onHoverButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.playerPanelButton.Size = new System.Drawing.Size(100, 35);
            this.playerPanelButton.TabIndex = 10;
            this.playerPanelButton.Text = "player";
            this.playerPanelButton.textColor = System.Drawing.Color.White;
            this.playerPanelButton.UseVisualStyleBackColor = true;
            // 
            // botPanelButton
            // 
            this.botPanelButton.borderColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.botPanelButton.buttonColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.botPanelButton.clicked = false;
            this.botPanelButton.FlatAppearance.BorderSize = 0;
            this.botPanelButton.FlatAppearance.CheckedBackColor = System.Drawing.Color.Transparent;
            this.botPanelButton.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.botPanelButton.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.botPanelButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.botPanelButton.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.botPanelButton.hovering = false;
            this.botPanelButton.Location = new System.Drawing.Point(261, 61);
            this.botPanelButton.Name = "botPanelButton";
            this.botPanelButton.onClickBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.botPanelButton.onClickButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.botPanelButton.onHoverBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.botPanelButton.onHoverButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.botPanelButton.Size = new System.Drawing.Size(100, 35);
            this.botPanelButton.TabIndex = 11;
            this.botPanelButton.Text = "bot";
            this.botPanelButton.textColor = System.Drawing.Color.White;
            this.botPanelButton.UseVisualStyleBackColor = true;
            // 
            // traderPanelButton
            // 
            this.traderPanelButton.borderColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.traderPanelButton.buttonColor = System.Drawing.Color.FromArgb(((int)(((byte)(90)))), ((int)(((byte)(90)))), ((int)(((byte)(90)))));
            this.traderPanelButton.clicked = false;
            this.traderPanelButton.FlatAppearance.BorderSize = 0;
            this.traderPanelButton.FlatAppearance.CheckedBackColor = System.Drawing.Color.Transparent;
            this.traderPanelButton.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.traderPanelButton.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.traderPanelButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.traderPanelButton.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.traderPanelButton.hovering = false;
            this.traderPanelButton.Location = new System.Drawing.Point(344, 61);
            this.traderPanelButton.Name = "traderPanelButton";
            this.traderPanelButton.onClickBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.traderPanelButton.onClickButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(140)))), ((int)(((byte)(140)))), ((int)(((byte)(140)))));
            this.traderPanelButton.onHoverBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.traderPanelButton.onHoverButtonColor = System.Drawing.Color.FromArgb(((int)(((byte)(110)))), ((int)(((byte)(110)))), ((int)(((byte)(110)))));
            this.traderPanelButton.Size = new System.Drawing.Size(100, 35);
            this.traderPanelButton.TabIndex = 12;
            this.traderPanelButton.Text = "trader";
            this.traderPanelButton.textColor = System.Drawing.Color.White;
            this.traderPanelButton.UseVisualStyleBackColor = true;
            // 
            // shoalGui
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(45)))), ((int)(((byte)(45)))), ((int)(((byte)(45)))));
            this.ClientSize = new System.Drawing.Size(531, 648);
            this.Controls.Add(this.traderPanelButton);
            this.Controls.Add(this.botPanelButton);
            this.Controls.Add(this.playerPanelButton);
            this.Controls.Add(this.raidPanelButton);
            this.Controls.Add(this.gamePanelButton);
            this.Controls.Add(this.shoalicon);
            this.Controls.Add(this.versionLabel);
            this.Controls.Add(this.shoalLabel);
            this.Controls.Add(this.traderPanel);
            this.Controls.Add(this.playerPanel);
            this.Controls.Add(this.botPanel);
            this.Controls.Add(this.raidPanel);
            this.Controls.Add(this.gamePanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "shoalGui";
            this.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Hide;
            this.Text = "shoal";
            this.Load += new System.EventHandler(this.shoalGui_Load);
            this.gamePanel.ResumeLayout(false);
            this.gamePanel.PerformLayout();
            this.raidPanel.ResumeLayout(false);
            this.raidPanel.PerformLayout();
            this.botPanel.ResumeLayout(false);
            this.botPanel.PerformLayout();
            this.playerPanel.ResumeLayout(false);
            this.playerPanel.PerformLayout();
            this.traderPanel.ResumeLayout(false);
            this.traderPanel.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.shoalicon)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel gamePanel;
        private System.Windows.Forms.Panel raidPanel;
        private System.Windows.Forms.Panel botPanel;
        private System.Windows.Forms.Panel playerPanel;
        private System.Windows.Forms.Panel traderPanel;
        private System.Windows.Forms.Label tradersLabel;
        private System.Windows.Forms.Label botLabel;
        private System.Windows.Forms.Label playerLabel;
        private System.Windows.Forms.Label raidLabel;
        private System.Windows.Forms.Label gameLabel;
        private System.Windows.Forms.Label shoalLabel;
        private System.Windows.Forms.Label versionLabel;
        private System.Windows.Forms.PictureBox shoalicon;
        private LeftPanelButton gamePanelButton;
        private MidPanelButton raidPanelButton;
        private MidPanelButton playerPanelButton;
        private MidPanelButton botPanelButton;
        private RightPanelButton traderPanelButton;
    }
}

