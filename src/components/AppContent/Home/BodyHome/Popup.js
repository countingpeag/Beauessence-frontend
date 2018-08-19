import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'; 

class Popup extends Component{

    render(){
        const {open, closefunc, savefunc, title, content} = this.props;
        return(
            <Dialog
                    open={open}
                    onClose={closefunc}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                    <DialogContent>

                        {
                            content
                        }
                    
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closefunc} color="primary">
                        Cancelar
                        </Button>
                        <Button onClick={savefunc} color="primary" autoFocus>
                        Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default Popup;