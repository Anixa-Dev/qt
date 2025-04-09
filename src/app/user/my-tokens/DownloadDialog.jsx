import React from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from '../../components/ui/CustomButton'
import CustomDialog from '../../components/ui/CustomDialog'
import ScanToken from '../scanToken'
import { colors } from '../../themes/default'

const useStyles = makeStyles(() => ({
  dialogPaper: {
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: colors.blackBase,
    color: colors.white,
    float: 'left',
    margin: '20px 0px 0px 20px',
    zIndex: 1,
  },
}))

const DownloadDialog = ({
  open, onClose, selectedToken, hasBackButton, fullScreen,
}) => {
  const classes = useStyles()

  return (
    <CustomDialog
      open={ open }
      onClose={ onClose }
      PaperProps={ { className: classes.dialogPaper } }
      noTitle
      fullScreen={ fullScreen }
      noContentPadding
    >
      {hasBackButton && (
        <CustomButton className={ classes.backButton } onClick={ onClose }> Close </CustomButton>
      )}
      <ScanToken parentData={ selectedToken } />
    </CustomDialog>
  )
}

export default DownloadDialog
